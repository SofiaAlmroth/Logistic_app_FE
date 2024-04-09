import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu bg-stone-200 min-w-48 p-4  font-bold">
      <li>
        <span className="gap-3 mb-4 mt-2 bg-menu-select">
          <i className="fa-solid fa-list"></i> <a>Inventory</a>
        </span>
      </li>
      <li>
        <span className="gap-3 mb-4">
          <i className="fa-solid fa-cart-shopping"></i>{" "}
          <Link to="/orders">Purchase Order</Link>
        </span>
      </li>
      <li>
        <span className="gap-3 mb-4">
          <i className="fa-solid fa-clipboard-list"></i> <a>Sales Order</a>
        </span>
      </li>
    </ul>
  );
}

export default Menu;
