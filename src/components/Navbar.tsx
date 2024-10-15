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
    <div className="bg-base-100 flex justify-end items-center px-6 py-4 ">
      <div className="dropdown dropdown-end ">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle bg-[#a9a2fc] hover:bg-[#4338ca] text-2xl text-black hover:text-white transition-colors duration-300"
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>

        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32"
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
}
