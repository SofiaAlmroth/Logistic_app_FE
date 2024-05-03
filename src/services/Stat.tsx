import { useOrders } from "@hooks/useOrders";

export function Stat() {
  const { orders } = useOrders();

  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <i className="fa-solid fa-cart-shopping"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Purchase</div>
        <div className="stat-value text-primary">{orders.length}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <i className="fa-solid fa-clipboard-list"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Sales</div>
        <div className="stat-value text-secondary">958</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <i className="fa-solid fa-clock"></i>
          <div className="w-16 rounded-full"></div>
        </div>
        <div className="stat-title">Pending Orders</div>
        <div className="stat-value">5</div>
      </div>
    </div>
  );
}
