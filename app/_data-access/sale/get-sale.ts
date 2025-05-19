import "server-only";

import { db } from "@/app/_lib/prisma";

export interface SaleDTO {
  id: string;
  productName: string;
  totalProducts: number;
  totalAmount: number;
  date: Date;
}

export const getSales = async (): Promise<SaleDTO[]> => {
  const sales = await db.sale.findMany({
    include: {
      saleProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return sales.map((sale) => ({
    id: sale.id,
    totalProducts: sale.saleProducts.reduce(
      (acc, saleProduct) => acc + saleProduct.quantity,
      0
    ),
    productName: sale.saleProducts
      .map((saleProduct) => saleProduct.product.name)
      .join(" • "),
    totalAmount: sale.saleProducts.reduce(
      (acc, saleProduct) =>
        acc + saleProduct.quantity * Number(saleProduct.unitPrice),
      0
    ),
    date: sale.date,
  }));
};
