import { formatCurrency } from "@/app/_helpers/currency";
import ProductStatusBadge from "@/app/_components/product-status-badge";
import { MostSoldProductDto } from "../../_data-access/dashboard/get-most-sold-products";

interface MostSoldProductProps {
  product: MostSoldProductDto;
}

const MostSoldProductItem = ({ product }: MostSoldProductProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-[6px]">
        <ProductStatusBadge status={product.status} />

        <p className="font-semibold">{product.name}</p>
        <p className="font-medium text-slate-500">
          {formatCurrency(Number(product.price))}
        </p>
      </div>

      <div>
        <p className="text-sm font-semibold">{product.totalSold} vendido(s)</p>
      </div>
    </div>
  );
};

export const MostSoldProductItemSkeleton = () => {
  return (
    <div className="flex items-center justify-between pt-6 ">
      <div className="space-y-2">
        <div className="h-[22px] w-[91.23px] bg-gray-200 rounded-md" />
        <div className="h-6 w-[91.23px] bg-gray-200 rounded-md" />
        <div className="h-6 w-[105px] bg-gray-200 rounded-md" />
      </div>

      <div>
        <div className="h-5 w-[86.26px] rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export default MostSoldProductItem;
