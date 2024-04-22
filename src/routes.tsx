import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RegisterPage from "./pages/RegisterPage";
import InventoryPage from "./pages/InventoryPage";
// import { LoginPage } from "./pages/LoginPage";
import Logout from "./components/Logout";
import OrderPage from "./pages/OrderPage";
import { LoginPage } from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import Sales from "./pages/SalesPage";
import Settings from "./components/Settings";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/balance", element: <InventoryPage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/orders", element: <OrderPage /> },
      { path: "/sales", element: <Sales /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/logout", element: <Logout /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/profile", element: <ProfilePage /> },
]);

export default router;
