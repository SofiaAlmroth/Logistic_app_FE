import OrderModal from "@components/OrderModal";
import { Table } from "@components/common";
import { useOrders } from "@hooks/useOrders";
import { Column, Order, SortColumn } from "@types";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name", order: "asc" };

function OrderHistoryPage() {
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const [currentOrderId, setCurrentOrderId] = useState("");
  const modalRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const orders = useOrders();

  console.log(orders);

  function handleOpenModal(id: string) {
    modalRef.current?.showModal();
    setCurrentOrderId(id);
  }

  function handleCloseModal() {
    modalRef.current?.close();
  }

  const columns: Column<Order>[] = [
    { path: "number", label: "Order Number" },
    { path: "totalQuantity", label: "Quantity" },
    {
      path: "status",
      label: "Status",
      content: (order) => (
        <div className="badge badge-success">{order.status}</div>
      ),
    },
    {
      path: "orderDate",
      label: "Order Date",
      content: (order) => <>{new Date(order.orderDate).toLocaleDateString()}</>,
    },

    {
      key: "view",
      content: (order) => (
        <div className="tooltip tooltip-primary" data-tip="View">
          <button
            className="btn btn-circle"
            onClick={() => handleOpenModal(order.id)}
          >
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="m-10">
        <button
          onClick={() => navigate("/neworder")}
          className="custom-button btn-wide"
        >
          New order
        </button>
      </div>
      <OrderModal
        orderId={currentOrderId}
        ref={modalRef}
        onClose={handleCloseModal}
      />

      <div className="m-6">
        <Table
          columns={columns}
          items={orders}
          onSort={setSortColumn}
          sortColumn={sortColumn}
        />
      </div>
    </div>
  );
}

export default OrderHistoryPage;
