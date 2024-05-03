import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu bg-stone-200 min-w-52 min-h-screen p-4 font-bold">
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `gap-2 mb-3 mt-2 ${isActive ? "bg-menu-select" : ""}`
          }
        >
          <i className="fa-solid fa-chart-line"></i>Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/balance"}
          className={({ isActive }) =>
            `gap-2 mb-3 mt-2 ${isActive ? "bg-menu-select" : ""}`
          }
        >
          <i className="fa-solid fa-list"></i>Inventory
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `gap-2 mb-3 mt-2 ${isActive ? "bg-menu-select" : ""}`
          }
        >
          <i className="fa-solid fa-clipboard-list"></i>Orders
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/sales"
          className={({ isActive }) =>
            `gap-2 mb-3 mt-2 ${isActive ? "bg-menu-select" : ""}`
          }
        >
          <i className="fa-solid fa-cart-shopping "></i>
          Sales
        </NavLink>
      </li>
      <div className="divider"></div>

      <li>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `gap-2 mb-3 mt-2 ${isActive ? "bg-menu-select" : ""}`
          }
        >
          <i className="fa-solid fa-gear"></i> Settings
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
