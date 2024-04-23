import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ModalProvider from "./context/ModalContext";

export default function App() {
  return (
    <ModalProvider>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Menu />
        <Outlet />
      </div>
    </ModalProvider>
  );
}
