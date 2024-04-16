import { useParams } from "react-router";
import ProductModal from "../components/ProductModal";
import { useState } from "react";

function OrderPage() {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className=" m-16">
      <button onClick={openModal} className="custom-button btn-wide">
        New Order
      </button>
      <ProductModal id={id} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default OrderPage;
