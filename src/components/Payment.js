import "./Payment.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useElements, useStripe, useEffect } from "@stripe/react-stripe-js";
import axios from './axios';
import CurrencyFormat from "react-currency-format";
import {db} from './firebase';
import { CardElement } from "@stripe/react-stripe-js";


const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal } = shoppingContext;

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const Navigate= useNavigate();

  useEffect(()=> {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payments/create?total=${getBasketTotal(basket)*100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket])

  const handleOnChange = (event) =>{
    setDisabled(event.empty);
    setError(event.error? "event.error.message": "")
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    payload.then(({ paymentIntent }) => {
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      Navigate("/orders");
    });
  }
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout<Link to="/checkout">{basket?.length} items</Link>
        </h1>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment_address">
          <p>{user?.email}</p>
          <p>1820 kelly Road</p>
          <p>Randburg</p>
          <p>Johannesburg</p>
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Review item and delivery</h3>
        </div>
        <div className="payment_item">
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="payment_section">
      <div className="payment_title">
            <div className="payment_details">

              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleOnChange}/>
                <div className="payment_priceContainer">
                  <CurrencyFormat renderText={(value) =>
                  <h3>Order Total: {value}</h3>

                  }
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  />
                 <button disabled={processing || disabled || succeeded}><span>{processing?<p>Processing</p> : "Buy Now"}</span></button>
                </div>
                {error && <div>{error}</div>}
              </form>

        </div>
      </div>
        
      </div>
    </div>

  );
};

export default Payment;
