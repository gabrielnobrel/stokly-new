"use server";

import { db } from "@/app/_lib/prisma";
import { DeleProductSchema, deleteProductSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const deleteProduct = async ({ id }: DeleProductSchema) => {
  deleteProductSchema.parse({ id });

  await db.product.delete({
    where: {
      id,
    },
  });

  revalidatePath("/products");
};
