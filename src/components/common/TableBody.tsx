import { Paint } from "../../services/fakePaintService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { useState } from "react";

interface Props {
  paints: Paint[];
  onDelete(id: string): void;
}

export function TableBody({ paints, onDelete }: Props) {
  const [slideOut, setSlideOut] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setSlideOut(id); // Set the ID to fade out
    setTimeout(() => {
      onDelete(id); // After a delay, trigger the delete action
    }, 1000); // Adjust the delay time as needed
  };
  return (
    <tbody>
      {paints.map((paint) => (
        <tr
          key={paint._id}
          className={slideOut === paint._id ? "slide-out" : ""}
        >
          <td>{paint.name}</td>
          <td>{paint.quantity}</td>
          <td>{paint.price}</td>
          <td>{paint.supplierInfo}</td>
          <td>{paint.orderDate ? paint.orderDate.toLocaleDateString() : ""}</td>
          <td>{paint.EAN_GTIN}</td>
          <td>{paint.batchName}</td>
          <td>
            {paint.bestBeforeDate
              ? paint.bestBeforeDate.toLocaleDateString()
              : ""}
          </td>
          <td className="p-2">
            <div className="tooltip" data-tip="Update">
              <button className="btn btn-circle">
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
          </td>
          <td className="p-2">
            <div className="tooltip tooltip-error" data-tip="Delete">
              <button
                className="btn btn-circle"
                onClick={() => handleDelete(paint._id)}
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
