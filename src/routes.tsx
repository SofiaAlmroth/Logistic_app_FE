import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import { LoginPage } from "./pages/LoginPage";
import {
  DashboardPage,
  InventoryPage,
  LoginPage,
  OrderHistoryPage,
  ProfilePage,
  RegisterPage,
  SalesPage,
} from "@pages";
import { Logout, Settings } from "@components";
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
      { path: "/settings", element: <Settings /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/logout", element: <Logout /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/profile", element: <ProfilePage /> },
]);

export default router;
