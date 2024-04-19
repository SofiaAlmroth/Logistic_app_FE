import _ from "lodash";

import { Paint, SortColumn } from "../types";
import { TableBody } from "./TableBody";
import { Column, TableHeader } from "./TableHeader";
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

export function PaintsTable({ sortColumn, paints, onSort, onDelete }: Props) {
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
    { path: "quantity", label: "Quantity" },
    { path: "price", label: "Price" },
    { path: "supplierInfo", label: "Suppier" },
    {
      key: "orderDate",
      content: (paint) => (
        <td>{new Date(paint.orderDate).toLocaleDateString()}</td>
      ),
    },
    { path: "ean_gtin", label: "Ean-Gtin" },
    {
      key: "bestBeforeDate",
      content: (paint) => (
        <td>{new Date(paint.bestBeforeDate).toLocaleDateString()}</td>
      ),
    },
    {
      key: "update",
      content: (paint: Paint) => (
        <div className="tooltip " data-tip="Update">
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
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
      <TableBody items={paints} onDelete={onDelete} columns={columns} />
    </table>
  );
}
