import { NavLink } from "react-router-dom";
import LogiAppLogo from "@assets/LogiApp_logo.svg";

function Menu() {
  return (
    <ul className="menu bg-stone-200 min-w-64 min-h-screen p-4 font-bold text-base gap-6">
      <div className="flex justify-center mb-8">
        <NavLink to="/inventory">
          <img src={LogiAppLogo} alt="LogiApp Logo" className="h-24 w-auto " />
        </NavLink>
      </div>

      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            ` ${isActive ? "bg-menu-select" : ""} flex items-center space-x-2`
          }
        >
          <i className="fa-solid fa-chart-line w-6 text-center"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/inventory"}
          className={({ isActive }) =>
            `${isActive ? "bg-menu-select" : ""} flex items-center space-x-2`
          }
        >
          <i className="fa-solid fa-list w-6 text-center"></i>{" "}
          <span>Inventory</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${isActive ? "bg-menu-select" : ""} flex items-center space-x-2`
          }
        >
          <i className="fa-solid fa-clipboard-list w-6 text-center"></i>
          <span>Purchase Orders</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/sales"
          className={({ isActive }) =>
            `${isActive ? "bg-menu-select" : ""} flex items-center space-x-2`
          }
        >
          <i className="fa-solid fa-cart-shopping w-6 text-center"></i>
          <span>Sales Orders</span>
        </NavLink>
      </li>
      <div className="divider"></div>

      <li>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${isActive ? "bg-menu-select" : ""} flex items-center space-x-2`
          }
        >
          <i className="fa-solid fa-gear w-6 text-center"></i>{" "}
          <span>Settings</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
