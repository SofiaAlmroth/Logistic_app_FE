import { useNavigate } from "react-router-dom";

function OrderHistoryPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="m-10">
        <button
          onClick={() => navigate("/neworder")}
          className="custom-button btn-wide"
        >
          New order
        </button>
      </div>

      <div className="m-6">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Order Name</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>#1001</td>
              <td>2024-04-23</td>
              <td>
                <div className="badge badge-success gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  success
                </div>
              </td>
              <td>
                {" "}
                <i className="fa-solid fa-eye"></i>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>#1002</td>
              <td>2024-04-22</td>
              <td>Pending</td>
              <td>
                {" "}
                <i className="fa-solid fa-eye"></i>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>#1003</td>
              <td>2024-04-22</td>
              <td>Pending</td>
              <td>
                <i className="fa-solid fa-eye"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderHistoryPage;
