import { FoodContext } from '@/context/FoodContext';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './style.module.scss';
import BannerPage from '@components/BannerPage/BannerPage';

const FoodDetail = () => {
  const foodId = useParams();
  const { foodList, cartItem, addToCart, removeFromCart, navigate } =
    useContext(FoodContext);
  const [foodData, setFoodData] = useState(false);
  const [image, setImage] = useState('');

  const fetchFoodData = async () => {
    foodList.map((item) => {
      const matchedItem = foodList.find((item) => item._id === foodId.foodId);
      if (matchedItem) {
        setFoodData(matchedItem);
        setImage(matchedItem.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchFoodData();
  }, [foodId]);

  const {
    foodDetail,
    foodTitle,
    foodImageBox,
    foodImage1x1,
    foodImageList,
    foodInfor,
    inforTtl,
    border,
    inforTxt,
    inforPrice,
    priceIco,
    price,
    priceTax,
    inforQtv,
    qtvBtn,
    qtvNumber,
    btnAdd,
    btnToCart
  } = styles;

  return foodData ? (
    <>
      <BannerPage />
      <div>
        <div className='row'>
          <div className='wrapBox'>
            <h2 className={foodTitle}>{foodData.name}</h2>
            <div className={foodDetail}>
              <div className={foodImageBox}>
                <figure className={foodImage1x1}>
                  <img src={image} alt='' className='fit' />
                </figure>
                <ul className={foodImageList}>
                  {foodData.image.map((item, index) => (
                    <li key={index}>
                      <img onClick={() => setImage(item)} src={item} alt='' />
                    </li>
                  ))}
                </ul>
              </div>
              <div className={foodInfor}>
                <p className={inforTtl}>
                  <span className={border}>内容</span>
                </p>
                <p className={inforTxt}>
                  もも・むね・砂ずり・特製つくね（各100g）
                  <br />
                  フォアグラ（80g）、特製わりした（500ml）
                </p>
                <p className={inforTtl}>
                  <span className={border}>詳細</span>
                </p>
                <p className={inforTxt}>
                  ※ 発送:通常3営業日以内
                  <br />※ 賞味期限:出荷日を含め30日
                  <br />※ 保存方法:要冷凍保存
                </p>
                <p className={inforPrice}>
                  <span className={priceIco}>¥</span>
                  <span className={price}>{foodData.price}</span>
                  <span className={priceTax}>（税込）</span>
                </p>
                {!cartItem[foodData._id] ? (
                  <button
                    className={btnAdd}
                    onClick={() => addToCart(foodData._id)}
                  >
                    カートに追加
                  </button>
                ) : (
                  <>
                    <div className={inforQtv}>
                      <button
                        className={qtvBtn}
                        onClick={() => removeFromCart(foodData._id)}
                      >
                        -
                      </button>
                      <p className={qtvNumber}>{cartItem[foodData._id]}</p>
                      <button
                        className={qtvBtn}
                        onClick={() => addToCart(foodData._id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className={btnAdd}
                      onClick={() => navigate('/cart')}
                    >
                      お買い物かごに入れる
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>404</div>
  );
};

export default FoodDetail;
