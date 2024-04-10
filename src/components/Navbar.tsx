import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { User } from "../types";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    const user = jwtDecode<User>(token);
    setUser(user);
  }, []);

  return (
    <div className="navbar bg-base-100 shadow flex justify-between">
      <div>
        <Link to="/balance" className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>
      <div className="dropdown dropdown-end mr-6">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to={"/profile"} className="block w-full py-1 ">
              Profile
            </Link>
          </li>
          <li>
            {!user && (
              <>
                <Link to="/login">Login</Link>

                <Link to="/register">Register</Link>
              </>
            )}
          </li>
          <li>
            {user && (
              <>
                <Link to="/profile">{user.name}</Link>
                <Link to="/logout">Logout</Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

{
  /* {user && (
        <div className="navbar-end">
          <Link to="/profile" className="btn btn-neutral ml-2">
            {user.name}
          </Link>
          <Link to="/logout" className="btn btn-primary ml-2">
            Logout
          </Link>
        </div>
      )}
      {!user && (
        <div className="navbar-end">
          <Link to="/login" className="btn btn-neutral ml-2">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary ml-2">
            Register
          </Link>
        </div>
      )} */
}
