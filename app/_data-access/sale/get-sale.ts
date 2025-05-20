import "server-only";

import { db } from "@/app/_lib/prisma";

interface SaleProductDTO {
  productId: string;
  quantity: number;
  unitPrice: number;
  productName: string;
}

export interface SaleDTO {
  id: string;
  productName: string;
  totalProducts: number;
  totalAmount: number;
  date: Date;
  saleProducts: SaleProductDTO[];
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
    saleProducts: sale.saleProducts.map(
      (saleproduct): SaleProductDTO => ({
        productId: saleproduct.productId,
        productName: saleproduct.product.name,
        quantity: saleproduct.quantity,
        unitPrice: Number(saleproduct.unitPrice),
      })
    ),
  }));
};
