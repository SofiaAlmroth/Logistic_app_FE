import _ from "lodash";
import { Table } from "@components/common";
import { Column, Paint, SortColumn } from "@types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  paints: Paint[];
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
  onAdd(id: string): void;
}

function SalesTable({ sortColumn, paints, onSort, onAdd }: Props) {
  const columns: Column<Paint>[] = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "quantity", label: "Quantity" },
    { path: "price", label: "Price" },
    { path: "supplierInfo", label: "Suppier" },
    {
      key: "orderDate",
      path: "orderDate",
      label: "Order Date",
      content: (paint) => <>{new Date(paint.orderDate).toLocaleDateString()}</>,
    },
    { path: "ean_gtin", label: "Ean-Gtin" },
    {
      key: "bestBeforeDate",
      path: "bestBeforeDate",
      label: "Best Before Date",
      content: (paint) => (
        <>{new Date(paint.bestBeforeDate).toLocaleDateString()}</>
      ),
    },
    {
      key: "update",
      content: (paint: Paint) => (
        <div className="tooltip tooltip-primary" data-tip="Add to cart">
          <button className="btn btn-circle" onClick={() => onAdd(paint.id)}>
            <FontAwesomeIcon icon={faPlus} />
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

export default SalesTable;
