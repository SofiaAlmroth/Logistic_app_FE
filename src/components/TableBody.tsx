import { Paint } from "../services/fakePaintService";

interface Props {
  paints: Paint[];
}

export function TableBody({ paints }: Props) {
  return (
    <tbody>
      {paints.map((paint) => (
        <tr key={paint._id}>
          <td>{paint.name}</td>
          <td>{paint.quantity}</td>
          <td>{paint.price}</td>
          <td>{paint.supplierInfo}</td>
          <td>{paint.orderDate.toLocaleDateString()}</td>
          <td>{paint.EAN_GTIN}</td>
          <td>{paint.batchName}</td>
          <td>{paint.bestBeforeDate.toLocaleDateString()}</td>
          <td>
            <button className="btn btn-ghost">Adjust</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
