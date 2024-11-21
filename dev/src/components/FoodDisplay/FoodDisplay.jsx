import React, { useContext } from 'react';
import { FoodContext } from '@/context/FoodContext';
import styles from './style.module.scss';
import FoodItem from '@components/FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(FoodContext);
  const filteredFoodList =
    category === 'All'
      ? foodList
      : foodList.filter((item) => item.category === category);
  const { listFood } = styles;
  return (
    <div className={listFood}>
      {filteredFoodList.map((item, index) => {
        if (category === 'All' || category === item.category) {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
              state_name={item.state_name}
              state={item.state}
            />
          );
        }
      })}
    </div>
  );
};

export default FoodDisplay;
