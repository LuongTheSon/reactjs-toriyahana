import React, { useState } from 'react';
import styles from './style.module.scss';
import { categoryList } from '@assets/images/image';
import BannerPage from '@components/BannerPage/BannerPage';
import FoodDisplay from '@components/FoodDisplay/FoodDisplay';

const Food = () => {
  const [category, setCategory] = useState('All');
  const { categoryTabs } = styles;
  console.log(category);
  return (
    <>
      <BannerPage />
      <div>
        <div className='row'>
          <div className='wrapBox'>
            {/* category tabs */}
            <ul className={categoryTabs}>
              {categoryList.map((item, index) => (
                <li
                  key={index}
                  className={category === item.menu_name ? styles.active : ''}
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.menu_name ? 'All' : item.menu_name
                    )
                  }
                >
                  {item.menu_title}
                </li>
              ))}
            </ul>

            {/* list food */}
            <FoodDisplay category={category} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
