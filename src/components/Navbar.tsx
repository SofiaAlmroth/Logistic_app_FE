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
    <div className="navbar bg-base-100 shadow ">
      <div className="navbar-start">
        <Link to="/balance" className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>

      {user && (
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
      )}
    </div>
  );
}
