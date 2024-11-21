import React, { useContext, useEffect, useState } from 'react';
import BannerPage from '@components/BannerPage/BannerPage';
import { FoodContext } from '@/context/FoodContext';
import { Link } from 'react-router-dom';
import { images } from '@assets/images/image';
import styles from './style.module.scss';
import CartTotal from '@components/CartTotal/CartTotal';

const Cart = () => {
  const { foodList, currency, cartItem, updateCart } = useContext(FoodContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData = [];
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        tempData.push({
          _id: item,
          quantity: cartItem[item]
        });
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  const {
    itemCart,
    itemCartImage,
    itemCartInfor,
    itemCartTtl,
    itemCartPrice,
    itemCartQtv,
    itemCartRemove,
    commentCart
  } = styles;

  return (
    <>
      <BannerPage />
      <div>
        <div className='row'>
          <div className='wrapBox'>
            {cartData.length > 0 ? (
              <>
                <div>
                  {cartData.map((item, index) => {
                    const foodsData = foodList.find(
                      (food) => food._id == item._id
                    );

                    return (
                      <div className={itemCart} key={index}>
                        <figure className={itemCartImage}>
                          <img src={foodsData.image[0]} alt='' />
                        </figure>
                        <div className={itemCartInfor}>
                          <p className={itemCartTtl}>{foodsData.name}</p>
                          <p className={itemCartPrice}>
                            {foodsData.price * item.quantity}
                            <span>{currency}</span>
                          </p>
                          <input
                            onClick={(e) =>
                              e.target.value === '' || e.target.value === '0'
                                ? null
                                : updateCart(item._id, Number(e.target.value))
                            }
                            type='number'
                            min={1}
                            defaultValue={item.quantity}
                            className={itemCartQtv}
                          />
                        </div>
                        <button
                          onClick={() => updateCart(item._id, 0)}
                          className={itemCartRemove}
                        >
                          <img
                            src={images.bin_icon}
                            className='fit'
                            alt='button remove cart'
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <CartTotal />
              </>
            ) : (
              <div className={commentCart}>
                アクセスいただきありがとうございます。
                <br />
                申し訳ありませんがお探しのページは見つかりませんでした。
                <br />
                お手数をおかけしますが、メニューからご希望のコンテンツをお選びいただけますと幸いです。
                <br />
                また<Link to='/food'>こちら</Link>
                からもトップページにお戻りいただけます。
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
