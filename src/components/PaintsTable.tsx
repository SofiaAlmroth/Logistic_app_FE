import _ from "lodash";

import { Paint, SortColumn } from "../types";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

interface Props {
  onSort: (sortColumn: SortColumn) => void;
  paints: Paint[];
  sortColumn: SortColumn;
  onDelete(id: string): void;
}

export function PaintsTable({ sortColumn, paints, onSort, onDelete }: Props) {
  return (
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} />
      <TableBody paints={paints} onDelete={onDelete} />
    </table>
  );
}
