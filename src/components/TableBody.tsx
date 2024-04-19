import "../App.css";
import _ from "lodash";
import { Column } from "./TableHeader";

type WithId<T> = T & { id: string };

interface Props<T> {
  items: WithId<T>[];
  columns: Column<T>[];
  onDelete(id: string): void;
}

export function TableBody<T>({ columns, items }: Props<T>) {
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
