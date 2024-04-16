import _ from "lodash";

import { Paint, SortColumn } from "../types";
import { TableHeader } from "./common/TableHeader";
import { TableBody } from "./common/TableBody";

interface Props {
  onSort: (sortColumn: SortColumn) => void;
  paints: Paint[];
  sortColumn: SortColumn;
  onDelete(id: string): void;
  onModalOpen(): void;
}

export function PaintsTable({
  sortColumn,
  paints,
  onSort,
  onDelete,
  onModalOpen,
}: Props) {
  return (
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} />
      <TableBody
        paints={paints}
        onDelete={onDelete}
        onModalOpen={onModalOpen}
      />
    </table>
  );
}
