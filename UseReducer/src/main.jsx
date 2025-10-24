import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./Counter.jsx";
import ApiData from "./ApiData.jsx";
import Cart from "./Cart.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <Counter />
   {/* <ApiData/> */}
   <Cart/>
  </div>
);
