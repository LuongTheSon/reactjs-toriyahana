import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images/image';
import styles from './style.module.scss';

const Footer = () => {
  const { footer, footerLogo, nameEn, footerPrivacy, copyright, footerMenu } =
    styles;
  return (
    <footer id='footer' className={footer}>
      <div className='inner'>
        <p className={footerLogo}>
          <Link to='/' className='hover'>
            <img src={images.FooterLogo} alt='' />
          </Link>
        </p>
        <ul className={`${footerMenu} pc'`}>
          <li>
            <Link className='hover' to='/about'>
              販売店について<span className={nameEn}>about</span>
            </Link>
          </li>
          <li>
            <Link className='hover' to='/guide'>
              はじめての方へ<span className={nameEn}>guide</span>
            </Link>
          </li>
          <li>
            <Link className='hover' to='/food'>
              商品一覧<span className={nameEn}>food</span>
            </Link>
          </li>
          <li>
            <Link className='hover' to='/cart'>
              お買い物かご<span className={nameEn}>cart</span>
            </Link>
          </li>
        </ul>
        <ul className={footerPrivacy}>
          <li>
            <a href='#'>プライバシーポリシー</a>
          </li>
          <li>
            <a href='#'>特定商取引法について</a>
          </li>
        </ul>
        <p className={copyright}>
          Copyright © WARAKU Co.,Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
