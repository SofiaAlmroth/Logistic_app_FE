import ProductModal from "../components/ProductModal";
import { useModalContext } from "../context/ModalContext";

function OrdersPage() {
  const { productModalRef } = useModalContext();

  return (
    <div className=" m-16">
      <button
        onClick={() => productModalRef.current?.show()}
        className="custom-button btn-wide"
      >
        Add Product
      </button>
      <ProductModal />
    </div>
  );
}

export default OrdersPage;
