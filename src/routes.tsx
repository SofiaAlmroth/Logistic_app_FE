import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RegisterPage from "./pages/RegisterPage";
import BalancePage from "./pages/BalancePage";
// import { LoginPage } from "./pages/LoginPage";
import Logout from "./components/Logout";
import OrderPage from "./pages/OrderPage";
import { LoginPage } from "./pages/LoginPage";
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/balance", element: <BalancePage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/orders", element: <OrderPage /> },
      { path: "/sales", element: <Sales /> },

      { path: "/orders/:id", element: <OrderPage /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/logout", element: <Logout /> },
  { path: "/login", element: <LoginPage /> },
]);

export default router;
