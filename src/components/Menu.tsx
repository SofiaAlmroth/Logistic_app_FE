import { useState } from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState<string | null>("dashboard");

  return (
    <ul className="menu bg-stone-200 min-w-52 min-h-screen p-4 font-bold">
      <li>
        <NavLink
          to={"/dashboard"}
          onClick={() => setSelectedMenu("dashboard")}
          className={`gap-2 mb-3 mt-2 ${
            selectedMenu === "dashboard" ? "bg-menu-select" : ""
          }`}
        >
          <i className="fa-solid fa-chart-line"></i>Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/balance"}
          onClick={() => setSelectedMenu("inventory")}
          className={`gap-2 mb-3 mt-2 ${
            selectedMenu === "inventory" ? "bg-menu-select" : ""
          }`}
        >
          <i className="fa-solid fa-list"></i>Inventory
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/orders"
          onClick={() => setSelectedMenu("purchase order")}
          className={`gap-2 mb-3 mt-2 ${
            selectedMenu === "purchase order" ? "bg-menu-select" : ""
          }`}
        >
          <i className="fa-solid fa-cart-shopping"></i>Purchases
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/sales"}
          onClick={() => setSelectedMenu("sales order")}
          className={`gap-2 mb-3 mt-2 ${
            selectedMenu === "sales order" ? "bg-menu-select" : ""
          }`}
        >
          <i className="fa-solid fa-clipboard-list"></i>
          Sales
        </NavLink>
      </li>
      <div className="divider"></div>

      <li>
        <NavLink
          to={"/settings"}
          onClick={() => setSelectedMenu("settings")}
          className={`gap-2 mb-3 mt-2 ${
            selectedMenu === "settings" ? "bg-menu-select" : ""
          }`}
        >
          <i className="fa-solid fa-gear"></i> Settings
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
