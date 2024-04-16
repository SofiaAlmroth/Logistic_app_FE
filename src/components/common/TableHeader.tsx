import _ from "lodash";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SortColumn } from "../../types";

interface Props {
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
}

export function TableHeader({ onSort, sortColumn }: Props) {
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
        <th onClick={() => handleSort("name")}>Name {sortIcon("name")}</th>
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
          EAN {sortIcon("ean_gtin")}
        </th>
        <th onClick={() => handleSort("batchName")}>
          Batch {sortIcon("batchName")}
        </th>
        <th onClick={() => handleSort("bestBeforeDate")}>
          Best before date {sortIcon("bestBeforeDate")}
        </th>

        <th />
      </tr>
    </thead>
  );
}
