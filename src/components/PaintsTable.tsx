import _ from "lodash";

import { Paint, SortColumn } from "../types";
import { TableBody } from "./TableBody";
import { Column, TableHeader } from "./TableHeader";

interface Props {
  paints: Paint[];
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
  onDelete(id: string): void;
}

export function PaintsTable({ sortColumn, paints, onSort, onDelete }: Props) {
  const columns: Column[] = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "quantity", label: "Quantity" },
    { path: "price", label: "Price" },
    { path: "supplierInfo", label: "Suppier" },
    { path: "orderDate", label: "Order Date" },
    { path: "ean_gtin", label: "Ean-Gtin" },
    { path: "bestBeforeDate", label: "Best Before Date" },
    { key: "update" },
    { key: "delete" },
  ];
  return (
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
      <TableBody paints={paints} onDelete={onDelete} columns={columns} />
    </table>
  );
}
