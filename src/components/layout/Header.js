import { useContext } from "react";
import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingContext from "../../context/shopping/shoppingContext";
import { auth } from "../../components/firebase.js";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, setUser } = shoppingContext;
  console.log(user);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => {
        setUser(null);
      });
    }
  };
  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header_logo"
        />
      </Link>

      <div className="header_option">
        <div className="delivery_option">
          <div className="location_icon">
            <FmdGoodIcon className="location_icon" />
          </div>
          <div className="location_text">
            <span className="header_optionOne">Deliver to</span>
            <span className="header_optionTwo">South AFRICA</span>
          </div>
        </div>
      </div>
      <div className="header_search">
        <button className="header_search_all">All</button>
        <input
          className="header_input"
          type="text"
          placeholder="Search Amazon"
        />
        <SearchIcon style={{ fontSize: "30px" }} className="search_icon" />
      </div>

      <Link to={!user && "/login"} className="header_optionLink">
        <div className="header_option" onClick={handleAuthentication}>
          <span className="header_optionOne">
            Hello {!user ? "Guest" : user.email}
          </span>
          <span className="header_optionTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
      </Link>

      <div className="header_option">
        <span className="header_optionOne">Returns</span>
        <span className="header_optionTwo">& orders</span>
      </div>
      <Link to="/checkout" className="option_basketLink">
        <div className="header_optionBasket">
          <ShoppingBasketIcon className="basket_icon" />
          <span className="header_basketCount">{basket?.length}</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
