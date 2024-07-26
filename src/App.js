
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/Product";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { useContext, useEffect } from "react";
import ShoppingContext from "./context/shopping/shoppingContext";
import {auth} from "./components/firebase"
import CheckoutProduct from "./components/CheckoutProduct";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import firebase from "firebase/compat/app"
import Orders from "./components/Orders"

const stripePromise = loadStripe("pk_test_51Pg57MAsGfRwVPYZNeBzdnMCHOVssxgKZ8xcobrH6wpmMKJdybuQWd216lpoKFYeRsepA9bviFk1Z8vw3WeLyXcG00zoE1Q88i ");

const PaymentWrapper = () =>(
  <Elements stripe={stripePromise}>
    <Payment/>
  </Elements>
)
const App = () => {
  
  const shoppingContext = useContext(ShoppingContext);
  const {setUser}= shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      console.log('user is ->', authUser)
      if(authUser){
        setUser(authUser)
      }else{
        setUser(null)
      }
    })
  },[])
  return (
    <>
      <div className="App">
          <Header />
          <main>
            <Routes> 
              <Route path="/" element={<Navigate to="/home" />} />
               <Route path="/home" element={<Home />} /> 
               <Route path="/login" element={<Login />} /> 
               <Route path="/products" element={<Products />} /> 
               <Route path="/products/:id" element={<ProductDetails />} /> 
               <Route path="/checkout-product" element={<CheckoutProduct/>}/>
               <Route path="/checkout" element={<Checkout/>}/>
               <Route path="/payment" element={<PaymentWrapper />}/> */} */}
               <Route path="*" element={<NotFound />} /> 
             </Routes>
          </main>
       
      </div>
    </>
  );
}

export default App;
