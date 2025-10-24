import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Context from "./Context/Context.jsx";
import CartContext from "./Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <Context>
      <App />
    </Context> */}
    <CartContext>
      <App />
    </CartContext>
  </>
);
