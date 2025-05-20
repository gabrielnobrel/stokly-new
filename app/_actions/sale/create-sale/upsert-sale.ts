"use server";

import { db } from "@/app/_lib/prisma";
import { createSaleSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { actionClient } from "@/app/_lib/safe-action";
import { returnValidationErrors } from "next-safe-action";

export const upsertSale = actionClient
  .schema(createSaleSchema)
  .action(async ({ parsedInput: { products, id } }) => {
    const isUpdate = !!id;
    if (isUpdate) {
      await db.$transaction(async (trx) => {
        const existingSale = await trx.sale.findUnique({
          where: { id },
          include: { saleProducts: true },
        });

        if (!existingSale) return;

        await trx.sale.delete({
          where: { id },
        });

        // Após deletar a venda, atualiza o estoque dos produtos
        for (const product of existingSale.saleProducts) {
          await trx.product.update({
            where: { id: product.productId },
            data: {
              stock: {
                increment: product.quantity,
              },
            },
          });
        }
      });
    }

    await db.$transaction(async (trx) => {
      const sale = await trx.sale.create({
        data: {
          date: new Date(),
        },
      });

      for (const product of products) {
        const productFromDb = await trx.product.findUnique({
          where: {
            id: product.id,
          },
        });

        if (!productFromDb) {
          returnValidationErrors(createSaleSchema, {
            _errors: ["Product not found."],
          });
        }

        const productOutOfStock = product.quantity > productFromDb.stock;
        if (productOutOfStock) {
          returnValidationErrors(createSaleSchema, {
            _errors: ["Product out of stock."],
          });
        }

        await trx.saleProduct.create({
          data: {
            saleId: sale.id,
            productId: product.id,
            quantity: product.quantity,
            unitPrice: productFromDb.price,
          },
        });

        await trx.product.update({
          where: {
            id: product.id,
          },
          data: {
            stock: {
              decrement: product.quantity,
            },
          },
        });
      }
    });

    revalidatePath("/products");
    revalidatePath("/sales");
  });
