import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../components/firebase"
import ShoppingContext from "../context/shopping/shoppingContext";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const shoppingContext = useContext(ShoppingContext)
  const {user}= shoppingContext;

  const navigate = useNavigate();

 
  const SignIn = (event) => {
    event.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) =>{
      if (auth) {
        navigate('/'); 
        }

    })
    .catch((error)=> alert(error.message))
  };
  const register = (event) => {
    event.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
    if (auth) {
    navigate('/'); // Navigate to home page on successful sign in
    }
    })
    .catch((error) => alert(error.message)); // Handle errors
    };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
          className="login-logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <label>password</label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button type="submit" className="login-button" onClick={SignIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="signup-button" onClick={register}>Create you Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
