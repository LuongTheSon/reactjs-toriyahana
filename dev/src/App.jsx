import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header/Header';
import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import Guide from '@pages/Guide/Guide';
import Food from '@pages/Food/Food';
import Cart from '@pages/Cart/Cart';
import Footer from '@components/Footer/Footer';
import FoodDetail from '@pages/FoodDetail/FoodDetail';
import Order from '@pages/Order/Order';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/guide' element={<Guide />} />
          <Route path='/food' element={<Food />} />
          <Route path='/food/:foodId' element={<FoodDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
