import "server-only";
import { Product } from "@prisma/client";
import { db } from "@/app/_lib/prisma";

// Pegar os produtos do banco de dados
export const getProducts = async (): Promise<Product[]> => {
  return await db.product.findMany({});
};
