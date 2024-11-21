import React from 'react';
import styles from '../style.module.scss';
import { foodMenuList } from '@assets/images/image';

const MenuFood = () => {
  const { menuFood, menuFoodTtl, menuFoodSub, menuFoodList, menuFoodListTtl } =
    styles;
  return (
    <div className={menuFood}>
      <div className='row'>
        <h2 className={menuFoodTtl}>『多彩な鶏料理』</h2>
        <p className={menuFoodSub}>
          自社の養鶏場だから出来る豊富なバリエーション。
          <br />
          お好みのカテゴリーからご選択ください。
        </p>
        <ul className={menuFoodList}>
          {foodMenuList.map((item, index) => (
            <li key={index}>
              <a href={item.anchor} className='hover'>
                <figure>
                  <img src={item.image} alt='' />
                </figure>
                <p className={menuFoodListTtl}>{item.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuFood;
