import React from 'react';
import FoodDisplay from '@components/FoodDisplay/FoodDisplay';
import styles from '../style.module.scss';

const FoodList = () => {
  const { foodDisplayBox, foodDisplayTitle, foodItemBtnShow } = styles;
  return (
    <section>
      <div className='row'>
        <div className='wrapBox'>
          <div className={foodDisplayBox}>
            <h3 className={foodDisplayTitle}>お鍋</h3>
            <FoodDisplay category={'Hotpot'} />
            <p className={foodItemBtnShow}>
              <a href='#' className='hover'>
                お鍋一覧へ
              </a>
            </p>
          </div>
          <div className={foodDisplayBox}>
            <h3 className={foodDisplayTitle}>串</h3>
            <FoodDisplay category={'Skewers'} />
            <p className={foodItemBtnShow}>
              <a href='#' className='hover'>
                お鍋一覧へ
              </a>
            </p>
          </div>
          <div className={foodDisplayBox}>
            <h3 className={foodDisplayTitle}>お刺身</h3>
            <FoodDisplay category={'Sashimi'} />
            <p className={foodItemBtnShow}>
              <a href='#' className='hover'>
                お鍋一覧へ
              </a>
            </p>
          </div>
          <div className={foodDisplayBox}>
            <h3 className={foodDisplayTitle}>精肉</h3>
            <FoodDisplay category={'Meat'} />
            <p className={foodItemBtnShow}>
              <a href='#' className='hover'>
                お鍋一覧へ
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodList;
