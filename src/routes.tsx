import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RegisterPage from "./pages/RegisterPage";
import BalancePage from "./pages/BalancePage";
import { LoginPage } from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/balance", element: <BalancePage /> }],
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
]);

export default router;
