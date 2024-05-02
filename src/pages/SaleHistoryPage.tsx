import OrderModal from "@components/OrderModal";
import { Table } from "@components/common";
import { useOrders } from "@hooks/useOrders";
import { SalesPage } from "@pages";
import { updateOrder } from "@services/orderService";
import { Column, Order, SortColumn } from "@types";
import _ from "lodash";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_SORT_COLUMN: SortColumn = { path: "number", order: "asc" };

function SaleHistorypage() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const [currentOrderId, setCurrentOrderId] = useState("");
  const { orders, setOrders } = useOrders();

  const statusOptions = [
    { label: "PENDING", color: "bg-orange-200 text-orange-800" },
    { label: "IN_TRANSIT", color: "bg-blue-200 text-blue-800" },
    { label: "RECEIVED", color: "bg-emerald-200 text-emerald-800" },
  ];

  function handleStatusUpdate(id: string, newStatus: string) {
    const newOrders = orders.map((order) => {
      if (order.id === id) {
        order.status = newStatus;
      }
      return order;
    });
    setOrders(newOrders);
    updateOrder(id, newStatus);
  }

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
      path: "orderDate",
      label: "Order Date",
      content: (order) => <>{new Date(order.orderDate).toLocaleDateString()}</>,
    },
    {
      key: "status",
      path: "status",
      label: "Status",
      content: (order) => (
        <select
          className={`border-none font-semibold py-1 h-8 badge ${
            statusOptions.find((o) => o.label === order.status)?.color
          }`}
          value={order.status}
          onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
        >
          {statusOptions.map((option) => (
            <option
              className="bg-gray-200 text-black"
              key={option.label}
              value={option.label}
            >
              {option.label}
            </option>
          ))}
        </select>
      ),
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

  const sortedOrders = _.orderBy(orders, sortColumn.path, sortColumn.order);

  return (
    <div className="w-full">
      <div className="m-10">
        <button
          onClick={() => navigate("/newsaleorder")}
          className="custom-button btn-wide"
        >
          New sale order
        </button>
      </div>

      <div className="m-6">
        <Table
          columns={columns}
          items={sortedOrders}
          onSort={setSortColumn}
          sortColumn={sortColumn}
        />
      </div>
    </div>
  );
}

export default SaleHistorypage;
