"use client";

import { Badge } from "@/app/_components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";
import ProductTableDropDownMenu from "./table-dropdown-menu";
import { ProductDto } from "@/app/_data-access/product/get-products";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em Estoque";
  }
  return "Esgotado";
};

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
      const label = getStatusLabel(product.status);
      return (
        <Badge
          variant={label === "Em Estoque" ? "default" : "outline"}
          className="gap-2"
        >
          <CircleIcon
            size={14}
            className={`${
              label === "Em Estoque"
                ? "fill-primary-foreground"
                : "fill-destructive-foreground"
            }`}
          />
          {label}
        </Badge>
      );
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
