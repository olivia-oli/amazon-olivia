import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"
import { BrowserRouter } from "react-router-dom";
import { ShoppingState } from "./context/shopping/shoppingState";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
       <ShoppingState>
         <App />
       </ShoppingState>
    </React.StrictMode>
  </BrowserRouter>
);