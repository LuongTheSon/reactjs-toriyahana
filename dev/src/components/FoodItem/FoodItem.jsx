import React, { useContext } from 'react';
import styles from './style.module.scss';
import { FoodContext } from '@/context/FoodContext';
import { Link } from 'react-router-dom';

const FoodItem = ({ id, name, image, price, state_name, state, onClick }) => {
  const { currency } = useContext(FoodContext);
  const {
    foodItem,
    foodItemTtl,
    foodItemDetail,
    foodItemPrice,
    foodItemCategory
  } = styles;

  return (
    <div className={foodItem} key={id}>
      <Link to={`/food/${id}`} onClick={onClick}>
        <figure>
          <img src={image[0]} alt='' />
        </figure>
        <p className={foodItemTtl}>{name}</p>
        <div className={foodItemDetail}>
          <span className={foodItemPrice}>
            {price}
            {currency}
            （税込）
          </span>
          <span className={`${foodItemCategory} state_${state}`}>
            {state_name}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default FoodItem;
