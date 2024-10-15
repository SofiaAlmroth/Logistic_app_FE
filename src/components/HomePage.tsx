import LogiAppLogo from "@assets/LogiApp_logo.svg";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute top-1/4 flex space-x-6 ">
        <NavLink to={"/login"} className="custom-button min-w-32 text-center">
          Login
        </NavLink>
        <NavLink
          to={"/register"}
          className="custom-button min-w-32 text-center"
        >
          Register
        </NavLink>
      </div>
      <img src={LogiAppLogo} alt="LogiApp Logo" className="h-3/4 w-auto" />
    </div>
  );
}

export default HomePage;
