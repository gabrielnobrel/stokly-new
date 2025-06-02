import { getMostSoldProducts } from "@/app/_data-access/dashboard/get-most-sold-products";
import MostSoldProductItem, {
  MostSoldProductItemSkeleton,
} from "@/app/(dashboard)/_components/most-sold-product-item";
import { Skeleton } from "@/app/_components/ui/skeleton";

const MostSoldProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 7000));

  const mostSoldProducts = await getMostSoldProducts();

  return (
    <div className="flex flex-col h-full overflow-hidden bg-white rounded-xl">
      <p className="px-6 pt-6 text-lg font-semibold text-slate-900">
        Produtos mais vendidos
      </p>
      <div className="px-6 pb-6 mt-6 overflow-y-auto space-y-7">
        {mostSoldProducts.map((product) => (
          <MostSoldProductItem key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export const MostSoldProductsSkeleton = () => {
  return (
    <Skeleton className="p-6 bg-white">
      <div className="space-y-2">
        <div className="w-48 h-5 bg-gray-200 rounded-md" />

        <MostSoldProductItemSkeleton />
      </div>
    </Skeleton>
  );
};

export default MostSoldProducts;
