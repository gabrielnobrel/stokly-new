"use client";

import { ColumnDef } from "@tanstack/react-table";
import ProductTableDropDownMenu from "./table-dropdown-menu";
import { ProductDto } from "@/app/_data-access/product/get-products";
import ProductStatusBadge from "@/app/_components/product-status-badge";

export const productTableColumn: ColumnDef<ProductDto>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor Unitário",
    cell: (row) => {
      const product = row.row.original;
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price));
    },
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;

      return <ProductStatusBadge status={product.status} />;
    },
  },
  {
    header: "Ações",
    accessorKey: "actions",
    cell: (row) => {
      return <ProductTableDropDownMenu product={row.row.original} />;
    },
  },
];
