import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer theme="colored" />
  </React.StrictMode>
);
