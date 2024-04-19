import _ from "lodash";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SortColumn } from "../types";

interface Props {
  columns: Column[];
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
}

interface TextColumn {
  path: string;
  label: string;
}

interface ContentColumn {
  key: string;
}
export type Column = TextColumn | ContentColumn;

export function TableHeader({ onSort, sortColumn, columns }: Props) {
  function handleSort(path: string) {
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort({ ...sortColumn });
  }

  function sortIcon(path: string) {
    if (path === sortColumn.path) return <i className="fa-solid fa-sort"></i>;
  }

  return (
    <thead>
      <tr>
        {columns.map((column) =>
          "path" in column ? (
            <th key={column.path} onClick={() => handleSort(column.path)}>
              {column.label} {sortIcon("name")}
            </th>
          ) : (
            <th key={column.key} />
          )
        )}
      </tr>
    </thead>
  );
}

{
  /* <thead>
      <tr>
        <th onClick={() => handleSort("name")}>Name {sortIcon("name")}</th>
        <th onClick={() => handleSort("name")}>
          Category {sortIcon("category")}
        </th>

        <th onClick={() => handleSort("quantity")}>
          Quantity {sortIcon("quantity")}
        </th>

        <th onClick={() => handleSort("price")}>Price {sortIcon("price")}</th>

        <th onClick={() => handleSort("supplierInfo")}>
          SupplierInfo {sortIcon("supplierInfo")}
        </th>

        <th onClick={() => handleSort("orderDate")}>
          Orderdate {sortIcon("orderDate")}
        </th>

        <th onClick={() => handleSort("ean_gtin")}>
          EAN-Gtin {sortIcon("ean_gtin")}
        </th>

        <th onClick={() => handleSort("bestBeforeDate")}>
          Best Before Date {sortIcon("bestBeforeDate")}
        </th>
      </tr>
    </thead> */
}
