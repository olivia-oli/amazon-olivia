import { useNavigate } from "react-router-dom";
import ShoppingContext from "../context/shopping/shoppingContext";
import "./Subtotal.css";
import React, { useContext } from "react";

const Subtotal = () => {
  const Navigate = useNavigate();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
  
  const handleCheckout =() => {
    Navigate('/payment')
  }

  return (
    <div className="subtotal">
      <p>
        subtotal: ({basket.length}items:{" "}
        <strong>${getBasketTotal(basket)}</strong>)
      </p>
      <small className="subtotal_gift">
        <input type='checkbox'/>
        This order contains a gift
      </small>
      <button onClick={handleCheckout}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
