import { Table } from "@components/common";
import { useSales } from "@hooks";
import { updateSale } from "@services/salesService";
import { Column, Order, Sale, SortColumn } from "@types";
import _ from "lodash";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_SORT_COLUMN: SortColumn = { path: "number", order: "asc" };

function SaleHistorypage() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const [currentSalesId, setCurrentSalesId] = useState("");
  const { sales, setSales } = useSales();

  const statusOptions = [
    { label: "PENDING", color: "bg-orange-200 text-orange-800" },
    { label: "IN_TRANSIT", color: "bg-blue-200 text-blue-800" },
    { label: "SENT", color: "bg-emerald-200 text-emerald-800" },
  ];

  console.log(sales);

  function handleOpenModal(id: string) {
    modalRef.current?.showModal();
    setCurrentSalesId(id);
  }

  // function handleCloseModal() {
  //   modalRef.current?.close();
  // }

  async function handleStatusUpdate(id: string, newStatus: string) {
    const newSales = sales.map((sale) => {
      if (sale.id === id) {
        sale.status = newStatus;
        console.log(sale.id);
      }
      return sale;
    });
    setSales(newSales);
    await updateSale(id, newStatus);
  }

  const columns: Column<Sale>[] = [
    { path: "number", label: "Sales Number" },
    { path: "totalQuantity", label: "Quantity" },

    {
      key: "orderDate",
      path: "orderDate",
      label: "Order Date",
      content: (sales) => <>{new Date(sales.orderDate).toLocaleDateString()}</>,
    },
    {
      key: "status",
      path: "status",
      label: "Status",
      content: (sales) => (
        <select
          className={`border-none font-semibold py-1 h-8 badge ${
            statusOptions.find((s) => s.label === sales.status)?.color
          }`}
          value={sales.status}
          onChange={(e) => handleStatusUpdate(sales.id, e.target.value)}
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
      content: (sales) => (
        <div className="tooltip tooltip-primary" data-tip="View">
          <button
            className="btn btn-circle"
            onClick={() => handleOpenModal(sales.id)}
          >
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
      ),
    },
  ];

  const sortedSales = _.orderBy(sales, sortColumn.path, sortColumn.order);

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
      {/* <SalesModal
        cartItems={cartItems}
        onClose={handleCloseModal}
        ref={modalRef}
      /> */}
      <div className="m-6">
        <Table
          columns={columns}
          items={sortedSales}
          onSort={setSortColumn}
          sortColumn={sortColumn}
        />
      </div>
    </div>
  );
}

export default SaleHistorypage;
