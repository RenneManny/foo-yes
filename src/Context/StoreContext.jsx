import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prevCart) => {
      const currentCount = prevCart[itemId] || 0;

      return { ...prevCart, [itemId]: currentCount + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => {
      const currentCount = prevCart[itemId] || 0;
      if (currentCount > 1) {
        return { ...prevCart, [itemId]: currentCount - 1 };
      } else {
        const { [itemId]: _, ...rest } = prevCart;
        return rest;
      }
    });
  };

const getTotal=()=>{
  let totalAmount=0;
  for(const item in cartItems){
    if(cartItems[item]>0){
      const itemInfo = food_list.find((product) => product._id === item);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
   
  }
  return totalAmount
}

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    getTotal
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
