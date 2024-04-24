import { Table } from "@components/common";
import { useOrders } from "@hooks/useOrders";
import { Column, Order, SortColumn } from "@types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name", order: "asc" };

function OrderHistoryPage() {
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);

  const navigate = useNavigate();
  const orders = useOrders();

  const columns: Column<Order>[] = [
    { path: "number", label: "Name" },
    { path: "quantity", label: "Quantity" },
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
