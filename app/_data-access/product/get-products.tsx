import "server-only";

import { Product } from "@prisma/client";
import { db } from "@/app/_lib/prisma";

export interface ProductDto extends Product {
  status: "IN_STOCK" | "OUT_OF_STOCK";
}

// Pegar os produtos do banco de dados
export const getProducts = async (): Promise<ProductDto[]> => {
  const products = await db.product.findMany({});
  return products.map((product) => ({
    ...product,
    status: product.stock > 0 ? "IN_STOCK" : "OUT_OF_STOCK",
  }));
};
