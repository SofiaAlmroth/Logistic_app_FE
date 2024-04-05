import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RegisterPage from "./pages/RegisterPage";
import BalancePage from "./pages/BalancePage";
import OrderPage from "./pages/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/balance", element: <BalancePage /> },
      { path: "/orders", element: <OrderPage /> },
      { path: "/orders/:id", element: <OrderPage /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> },
]);

export default router;
