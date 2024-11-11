import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CartProvider>
        <ToastContainer />
        <App />
      </CartProvider>
    </StrictMode>
  </BrowserRouter>
);
