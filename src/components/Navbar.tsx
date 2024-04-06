import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow mb-2">
      <div className="navbar-start">
        <Link to="/balance" className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Stock</a>
          </li>
          <li>
            <a>Orders</a>
          </li>
          <li>
            <a>Sales</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/register" className="btn btn-primary ml-2">
          Register
        </Link>
      </div>
    </div>
  );
}
