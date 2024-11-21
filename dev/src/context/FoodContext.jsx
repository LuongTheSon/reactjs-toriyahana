import React, { createContext, useState } from 'react';
import { foodList } from '@assets/images/image';
import { useNavigate } from 'react-router-dom';

export const FoodContext = createContext();

const FoodContextProvider = (props) => {
  const currency = '円';
  const dilivery = 10;
  const navigate = useNavigate();
  const [foodItem, setFoodItem] = useState({});
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCart = async (itemId, quantity) => {
    let cartData = structuredClone(cartItem);

    cartData[itemId] = quantity;

    setCartItem(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      let itemInfor = foodList.find((food) => food._id === item);
      try {
        if (cartItem[item] > 0) {
          totalAmount += itemInfor.price * cartItem[item];
        }
      } catch (err) {
        console.error('error cart amount:', err);
      }
    }
    return totalAmount;
  };

  const value = {
    currency,
    foodList,
    foodItem,
    setFoodItem,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    updateCart,
    getCartAmount,
    dilivery,
    navigate
  };
  return (
    <FoodContext.Provider value={value}>{props.children}</FoodContext.Provider>
  );
};

export default FoodContextProvider;
