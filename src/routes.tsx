import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  DashboardPage,
  InventoryPage,
  LoginPage,
  OrderHistoryPage,
  OrdersPage,
  ProfilePage,
  RegisterPage,
  SalesPage,
  SettingsPage,
} from "@pages";
import { Logout } from "@components";
import SaleHistorypage from "@pages/SaleHistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/inventory", element: <InventoryPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/orders", element: <OrderHistoryPage /> },
      { path: "/neworder", element: <OrdersPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/sales", element: <SaleHistorypage /> },
      { path: "/newsaleorder", element: <SalesPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/logout", element: <Logout /> },
  { path: "/login", element: <LoginPage /> },
]);

export default router;
