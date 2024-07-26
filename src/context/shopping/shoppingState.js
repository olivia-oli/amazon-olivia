import React, { useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: JSON.parse(localStorage.getItem('basket')) || [], user: null };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  
  const addToBasket = ({item}) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };
  const setUser = (user) => {
    dispatch({
      type: 'SET_USER',
      payload: user,
    })
  }
  
  // Selectors
  const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => {
      const price = parseFloat(item?.item?.price?.replace('$', '')?? 0);
      return amount + (isNaN(price) ? 0 : price);
    }, 0);
  };

  const removeFromBasket = (item)=>{
    dispatch({type:'REMOVE_FROM_BASKET',payload: item})
  }
  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser,
        removeFromBasket,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
