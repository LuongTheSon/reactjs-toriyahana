import React, { useContext } from 'react';
import { FoodContext } from '@/context/FoodContext';
import styles from './style.module.scss';
import { useLocation } from 'react-router-dom';

const CartTotal = () => {
  const { currency, dilivery, getCartAmount, navigate } =
    useContext(FoodContext);

  const location = useLocation();
  console.log(location);
  const {
    amountBox,
    amountTtl,
    amountList,
    amountName,
    amountPrice,
    amountButton
  } = styles;
  return (
    <div className={amountBox}>
      <h3 className={amountTtl}>合計</h3>
      <ul className={amountList}>
        <li>
          <p className={amountName}>subtotal</p>
          <p className={amountPrice}>
            {getCartAmount()}
            {currency}
          </p>
        </li>
        <li>
          <p className={amountName}>shiping</p>
          <p className={amountPrice}>
            {dilivery}
            {currency}
          </p>
        </li>
        <li>
          <p className={amountName}>total</p>
          <p className={amountPrice}>
            {getCartAmount() === 0 ? '0' : getCartAmount() + dilivery}
            {currency}
          </p>
        </li>
      </ul>
      {location.pathname.includes('/cart') && (
        <button className={amountButton} onClick={() => navigate('/order')}>
          お支払いへ
        </button>
      )}
    </div>
  );
};

export default CartTotal;
