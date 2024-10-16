import LogiAppLogo from "@assets/LogiApp_logo.svg";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <img
        src={LogiAppLogo}
        alt="LogiApp Logo"
        className="h-2/4 w-auto mb-12"
      />
      {/* <p className="poppins-bold uppercase text-4xl">
        Simplifying Your Inventory Management
      </p> */}
      <div className="absolute bottom-1/4 flex space-x-6 ">
        <NavLink to={"/login"} className="custom-button2 min-w-44 text-center">
          Login
        </NavLink>
        <NavLink
          to={"/register"}
          className="custom-button2 min-w-44 text-center"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
