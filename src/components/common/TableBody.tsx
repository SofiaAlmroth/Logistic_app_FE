import "../App.css";
import _ from "lodash";
import { Column, Id } from "../../types";

interface Props<T extends Id> {
  items: T[];
  columns: Column<T>[];
}

export function TableBody<T extends Id>({ columns, items }: Props<T>) {
  return (
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          {columns.map((column) =>
            "path" in column ? (
              <td key={column.path}>{_.get(item, column.path)}</td>
            ) : (
              <td key={column.key}>{column.content(item)}</td>
            )
          )}

          {/* <td>{new Date(paint.bestBeforeDate).toLocaleDateString()}</td> */}
        </tr>
      ))}
    </tbody>
  );
}

// className={slideOut === paint.id ? "slide-out" : ""}
