import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ModalProvider from "./context/ModalContext";

export default function App() {
  return (
    <ModalProvider>
      <div className="flex h-screen">
        {/* Sidebar (Menu) */}
        <Menu />

        {/* Main Content Area with Navbar at the top */}
        <div className="flex-1 flex flex-col">
          {/* Navbar at the top */}
          <Navbar />

          {/* Main content displayed below the navbar */}
          <div className="flex-1 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
