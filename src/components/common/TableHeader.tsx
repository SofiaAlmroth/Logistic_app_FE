import _ from "lodash";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Column, SortColumn, TextColumn } from "@types";

interface Props<T> {
  columns: Column<T>[];
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
}
function TableHeader<T>({ onSort, sortColumn, columns }: Props<T>) {
  function handleSort(path: string) {
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort({ ...sortColumn });
  }

  function sortIcon(column: TextColumn) {
    if (column.path !== sortColumn.path) return null;

    if (sortColumn.order === "asc")
      return <i className="fa-solid fa-sort-down text-xl"></i>;

    return <i className="fa-solid fa-sort-up text-xl"></i>;
  }

  return (
    <thead>
      <tr className="text-sm">
        {columns.map((column) =>
          "path" in column ? (
            <th key={column.path} onClick={() => handleSort(column.path)}>
              {column.label} {sortIcon(column)}
            </th>
          ) : (
            <th key={column.key} />
          )
        )}
      </tr>
    </thead>
  );
}

export default TableHeader;

{
}
