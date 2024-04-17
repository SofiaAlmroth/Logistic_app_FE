import ProductModal from "../components/ProductModal";
import { useModalContext } from "../context/ModalContext";

function OrderPage() {
  const { productModalRef } = useModalContext();

  return (
    <div className=" m-16">
      <button
        onClick={() => productModalRef.current?.show()}
        className="custom-button btn-wide"
      >
        New Order
      </button>
      <ProductModal />
    </div>
  );
}

export default OrderPage;
