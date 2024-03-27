export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow mb-2">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Home</a>
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
        <a className="btn">Settings</a>
      </div>
    </div>
  );
}
