import React, { useContext } from 'react';
import BannerPage from '@components/BannerPage/BannerPage';
import CartTotal from '@components/CartTotal/CartTotal';
import styles from './style.module.scss';
import { FoodContext } from '@/context/FoodContext';

const Order = () => {
  const { getCartAmount } = useContext(FoodContext);

  const {
    order,
    orderFrom,
    rowForm,
    nameForm,
    require,
    inputForm,
    inputText,
    btnForm
  } = styles;
  return (
    <>
      <BannerPage />
      <section>
        <div className='row'>
          <div className='wrapBox'>
            <div className={order}>
              <div className={orderFrom}>
                <form action=''>
                  <div className={rowForm}>
                    <p className={nameForm}>
                      お名前<span className={require}>（必須）</span>
                    </p>
                    <input type='text' required className={inputForm} />
                  </div>
                  <div className={rowForm}>
                    <p className={nameForm}>
                      メールアドレス<span className={require}>（必須）</span>
                    </p>
                    <input type='email' required className={inputForm} />
                  </div>
                  <div className={rowForm}>
                    <p className={nameForm}>
                      ご住所<span className={require}>（必須）</span>
                    </p>
                    <input type='text' required className={inputForm} />
                  </div>
                  <div className={rowForm}>
                    <p className={nameForm}>
                      電話番号<span className={require}>（必須）</span>
                    </p>
                    <input type='tel' required className={inputForm} />
                  </div>
                  <div className={rowForm}>
                    <p className={nameForm}>電話番号</p>
                    <textarea className={inputText}></textarea>
                  </div>
                  <div className={rowForm}>
                    <input
                      type='submit'
                      className={`${
                        getCartAmount() > 0
                          ? btnForm
                          : `${styles.visible} ${btnForm}`
                      }`}
                      value='上記内容で送信'
                    />
                  </div>
                </form>
              </div>
              <CartTotal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
