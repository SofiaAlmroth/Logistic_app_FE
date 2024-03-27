import ListGroup from "./components/ListGroup";
import { paints } from "./services/fakePaintService";

function BalancePage() {
  return (
    <div className="flex">
      <div className="flex-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>SupplierInfo</th>
              <th>Orderdate</th>
              <th>EAN</th>
              <th>Batch</th>
              <th>Best before date</th>
              <th />
            </tr>
          </thead>
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
        </table>
      </div>
      <div className="flex-none ml-4">
        <ListGroup />
      </div>
    </div>
  );
}
export default BalancePage;
