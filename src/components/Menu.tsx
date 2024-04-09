import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState<string | null>("inventory");

  return (
    <ul className="menu bg-stone-200 min-w-52 min-h-screen p-4 font-bold">
      <li>
        <span
          onClick={() => setSelectedMenu("inventory")}
          className={`gap-2 mb-3 mt-2 ${
            selectedMenu === "inventory" ? "bg-menu-select" : ""
          }`}
        >
          <i className="fa-solid fa-list"></i>
          <Link to={"/balance"}>Inventory</Link>
        </span>
      </li>

      <li>
        <span
          onClick={() => setSelectedMenu("purchase order")}
          className={`gap-2 mb-3 mt-2 ${
            selectedMenu === "purchase order" ? "bg-menu-select" : ""
          }`}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <Link to="/orders">Purchase Order</Link>
        </span>
      </li>
      <li>
        <span
          onClick={() => setSelectedMenu("sales order")}
          className={`gap-2 mb-3 mt-2 ${
            selectedMenu === "sales order" ? "bg-menu-select" : ""
          }`}
        >
          <i className="fa-solid fa-clipboard-list"></i> <a>Sales Order</a>
        </span>
      </li>
    </ul>
  );
}

export default Menu;
