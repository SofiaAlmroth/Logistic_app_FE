import { useState } from "react";
import { Pagination } from "./components/Pagination";
import { paints } from "./services/fakePaintService";

const PAGE_SIZE = 4;

function BalancePage() {
  const [selectedPage, setSelectedPage] = useState(1);
  return (
    <div>
      <div className="table-x-auto">
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
              <tr>
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
      <Pagination
        totalCount={paints.length}
        pageSize={PAGE_SIZE}
        selectedPage={selectedPage}
        onPageSelect={setSelectedPage}
      />
    </div>
  );
}
export default BalancePage;
