import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  DashboardPage,
  InventoryPage,
  LoginPage,
  OrderHistoryPage,
  ProfilePage,
  RegisterPage,
  SalesPage,
  SettingsPage,
} from "@pages";
import { Logout } from "@components";
import OrdersPage from "@pages/OrdersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/balance", element: <InventoryPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/orders", element: <OrderHistoryPage /> },
      { path: "/neworder", element: <OrdersPage /> },

      { path: "/sales", element: <SalesPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/orders/:id", element: <OrderHistoryPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/logout", element: <Logout /> },
  { path: "/login", element: <LoginPage /> },
]);

export default router;
