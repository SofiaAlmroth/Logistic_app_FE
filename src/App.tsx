import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ModalProvider from "./context/ModalContext";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <ModalProvider>
      {/* If NOT on the homepage, render the Menu and Navbar */}
      {!isHomePage && (
        <div className="flex h-screen">
          <Menu />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="flex-1 p-6">
              <Outlet />
            </div>
          </div>
        </div>
      )}

      {/* If on the homepage, render only the Outlet (which will contain the homepage component) */}
      {isHomePage && (
        <div className="flex-1">
          <Outlet />
        </div>
      )}
    </ModalProvider>
  );
}
