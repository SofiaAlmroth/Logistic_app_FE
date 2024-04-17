import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { useState } from "react";
import { Paint } from "../types";
import { useModalContext } from "../context/ModalContext";

interface Props {
  paints: Paint[];
  onDelete(id: string): void;
}

export function TableBody({ paints, onDelete }: Props) {
  const [slideOut, setSlideOut] = useState<string | null>(null);
  const { productModalRef } = useModalContext();

  const handleDelete = (id: string) => {
    setSlideOut(id); // Set the ID to fade out
    setTimeout(() => {
      onDelete(id); // After a delay, trigger the delete action
    }, 1000); // Adjust the delay time as needed
  };

  return (
    <tbody>
      {paints.map((paint) => (
        <tr key={paint.id} className={slideOut === paint.id ? "slide-out" : ""}>
          <td>{paint.name}</td>
          <td>{paint.quantity}</td>
          <td>{paint.price}</td>
          <td>{paint.supplierInfo}</td>
          <td>{new Date(paint.orderDate).toLocaleDateString()}</td>
          <td>{paint.ean_gtin}</td>
          <td>{paint.batchName}</td>
          <td>{new Date(paint.bestBeforeDate).toLocaleDateString()}</td>
          <td>
            <div className="tooltip" data-tip="Update">
              <button
                className="btn btn-circle"
                onClick={() => productModalRef.current?.show()}
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
