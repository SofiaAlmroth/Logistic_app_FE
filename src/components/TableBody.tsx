import "../App.css";
import { Paint } from "../types";
import _ from "lodash";
import { Column } from "./TableHeader";

interface Props {
  paints: Paint[];
  columns: Column[];
  onDelete(id: string): void;
}

export function TableBody({ columns, paints }: Props) {
  return (
    <tbody>
      {paints.map((paint) => (
        <tr key={paint.id}>
          {columns.map((column) =>
            "path" in column ? (
              <td key={column.path}>{_.get(paint, column.path)}</td>
            ) : (
              <td key={column.key}>{column.content(paint)}</td>
            )
          )}

          {/* <td>{new Date(paint.bestBeforeDate).toLocaleDateString()}</td> */}
        </tr>
      ))}
    </tbody>
  );
}

// className={slideOut === paint.id ? "slide-out" : ""}
