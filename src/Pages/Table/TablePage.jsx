import OrdersTable from "../../Component/Table/OrderTable";
import ProductsTable from "../../Component/Table/ProductsTable";


const TablePage = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
      <OrdersTable />
      <div className="my-8"></div>
      <ProductsTable />
    </div>
    </div>
  );
};

export default TablePage;