import React from 'react';
import Banner from '@pages/Home/section/Banner';
import MenuFood from '@pages/Home/section/MenuFood';
import FoodList from '@pages/Home/section/FoodList';

const Home = () => {
  return (
    <div>
      <Banner />
      <MenuFood />
      <FoodList />
    </div>
  );
};

export default Home;
