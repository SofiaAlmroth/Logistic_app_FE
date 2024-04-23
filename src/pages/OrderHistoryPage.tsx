import { useNavigate } from "react-router-dom";

function OrderHistoryPage() {
  const navigate = useNavigate();

  return (
    <div className=" m-16">
      <button
        onClick={() => navigate("/neworder")}
        className="custom-button btn-wide"
      >
        New Order
      </button>
    </div>
  );
}

export default OrderHistoryPage;
