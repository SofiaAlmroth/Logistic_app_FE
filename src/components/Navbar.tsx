import authService from "../services/authService";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { User } from "@types";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = authService.getCurrentUser();
    setUser(user);
  }, []);

  return (
    <div className="navbar bg-base-100 shadow flex justify-between">
      <div>
        <NavLink to="/balance" className="btn btn-ghost text-xl">
          Logistic App
        </NavLink>
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
            <NavLink to={"/profile"} className="block w-full py-1 ">
              Profile
            </NavLink>
          </li>
          <li>
            {!user && (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </li>
          <li>
            {user && (
              <>
                <NavLink to="/profile">{user.name}</NavLink>
                <NavLink to="/logout">Logout</NavLink>
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
