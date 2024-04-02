import _ from "lodash";
import { Paint } from "../services/fakePaintService";
import { SortColumn } from "../types";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

interface Props {
  onSort: (sortColumn: SortColumn) => void;
  paints: Paint[];
  sortColumn: SortColumn;
}

export function PaintsTable({ sortColumn, onSort, paints }: Props) {
  return (
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} />
      <TableBody paints={paints} />
    </table>
  );
}
