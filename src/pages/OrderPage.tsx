import { useParams } from "react-router";
import ProductModal from "../components/ProductModal";

function OrderPage() {
  const { id } = useParams();
  return (
    <div className=" m-16">
      <ProductModal orderId={id} />
    </div>
  );
}

export default OrderPage;
