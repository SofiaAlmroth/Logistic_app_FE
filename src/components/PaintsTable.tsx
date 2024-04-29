import _ from "lodash";
import { Table } from "@components/common";
import { Column, Paint, SortColumn } from "@types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModalContext } from "../context/ModalContext";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
  paints: Paint[];
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
  onDelete(id: string): void;
}

function PaintsTable({ sortColumn, paints, onSort, onDelete }: Props) {
  const { productModalRef, setProductId } = useModalContext();
  const [slideOut, setSlideOut] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setSlideOut(id); // Set the ID to fade out
    setTimeout(() => {
      onDelete(id); // After a delay, trigger the delete action
    }, 1000); // Adjust the delay time as needed
  };

  function handleOpenModal(id: string) {
    setProductId(id);
    productModalRef.current?.show();
  }

  const columns: Column<Paint>[] = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "quantity", label: "Quantity (l)" },
    { path: "price", label: "Price (SEK)" },
    { path: "supplierInfo", label: "Suppier" },
    {
      path: "orderDate",
      label: "Order Date",
      content: (paint) => <>{new Date(paint.orderDate).toLocaleDateString()}</>,
    },
    { path: "ean_gtin", label: "Ean-Gtin" },
    {
      path: "bestBeforeDate",
      label: "Best Before Date",
      content: (paint) => (
        <>{new Date(paint.bestBeforeDate).toLocaleDateString()}</>
      ),
    },
    {
      key: "update",
      content: (paint: Paint) => (
        <div className="tooltip tooltip-primary" data-tip="Update">
          <button
            className="btn btn-circle"
            onClick={() => handleOpenModal(paint.id)}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
        </div>
      ),
    },
    {
      key: "delete",
      content: (paint) => (
        // className={slideOut === paint.id ? "slide-out" : ""}
        <div className="tooltip tooltip-error" data-tip="Delete">
          <button
            className="btn btn-circle"
            onClick={() => handleDelete(paint.id)}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      items={paints}
      onSort={onSort}
      sortColumn={sortColumn}
    />
  );
}

export default PaintsTable;
