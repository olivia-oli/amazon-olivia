import { useNavigate, Link } from "react-router-dom";
import ShoppingContext from "../context/shopping/shoppingContext";
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import React, { useContext } from "react";

const Subtotal = () => {
  const Navigate = useNavigate();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
  const handleCheckout =() => {
    Navigate('/payment')
  }

  return (
    <div className='subtotal'>
    <div className="currency-wrapper">
    <div>  
    <CurrencyFormat
        render={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} item{basket.length !== 1 && 's'}): <strong>{value}</strong>
            </p>
            
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"$"}
      
      />
      </div>
    
      <div className='total'>
        <span>({basket.length}</span>{basket.length > 1 ? ' Items)' : ' Item)'}
      </div>
    </div>   
            <small className='subtotal-gift'>
              <input type="checkbox" />
              <label htmlFor="checkbox">This order contains a gift</label>
            </small>
            <Link to="/payment"> <button className='checkout-btn'>Proceed to Checkout</button></Link>  
    </div>
  );
};
export default Subtotal;