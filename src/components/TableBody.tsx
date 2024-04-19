import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { useState } from "react";
import { Paint } from "../types";
import { useModalContext } from "../context/ModalContext";
import _ from "lodash";
import { Column } from "./TableHeader";

interface Props {
  paints: Paint[];
  columns: Column[];
  onDelete(id: string): void;
}

export function TableBody({ columns, paints, onDelete }: Props) {
  const [slideOut, setSlideOut] = useState<string | null>(null);
  const { productModalRef, setProductId } = useModalContext();

  const handleDelete = (id: string) => {
    setSlideOut(id); // Set the ID to fade out
    setTimeout(() => {
      onDelete(id); // After a delay, trigger the delete action
    }, 1000); // Adjust the delay time as needed
  };

  function handleOpenModal(id: string) {
    setProductId(id);
    productModalRef.current?.show();
  }

  return (
    <tbody>
      {paints.map((paint) => (
        <tr key={paint.id} className={slideOut === paint.id ? "slide-out" : ""}>
          {columns.map(
            (column) =>
              "path" in column && (
                <td key={column.path}>{_.get(paint, column.path)}</td>
              )
          )}

          {/* <td>{new Date(paint.bestBeforeDate).toLocaleDateString()}</td> */}
          <td className="p-0">
            <div className="tooltip " data-tip="Update">
              <button
                className="btn btn-circle"
                onClick={() => handleOpenModal(paint.id)}
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
          </td>
          <td>
            <div className="tooltip tooltip-error" data-tip="Delete">
              <button
                className="btn btn-circle"
                onClick={() => handleDelete(paint.id)}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
