import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Menu />
        <Outlet />
      </div>
    </>
  );
}
