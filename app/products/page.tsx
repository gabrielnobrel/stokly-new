import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";
import { productTableColumn } from "./_components/table-columns";
import AddProductButton from "./_components/create-product-button";
import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="w-full p-8 m-8 space-y-8 overflow-auto bg-white rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Gestão de Produtos</HeaderSubtitle>
          <HeaderTitle>Produtos</HeaderTitle>
        </HeaderLeft>

        <HeaderRight>
          <AddProductButton />
        </HeaderRight>
      </Header>

      {/* TABELA */}
      <DataTable columns={productTableColumn} data={products} />
    </div>
  );
};

export default ProductsPage;
