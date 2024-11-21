import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { images, social } from '@assets/images/image';
import styles from './style.module.scss';

const Header = () => {
  const [fixHeight, setFitHeight] = useState(0);
  const [actHamburger, setActHamburger] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setFitHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const {
    header,
    headerInner,
    headerTop,
    headerDescript,
    headerBottom,
    headerLogo,
    boxSocial,
    headerMenu,
    menuNameEn,
    menuCartIcon,
    iconMenu,
    bar1,
    bar2,
    bar3,
    change,
    actMenu
  } = styles;
  return (
    <>
      <header ref={headerRef} className={header}>
        <h1 className={headerLogo}>
          <Link to='/'>
            <img src={images.headerLogo} alt='' className='fit' />
          </Link>
        </h1>
        <div className={headerTop}>
          <div className={headerInner}>
            <p className={`${headerDescript} pc`}>
              <span className='orange'>
                【鳥屋花オンラインショップ】希少部位専門店
              </span>
              <span className='white'>
                鮮度抜群！自社養鶏場からの直送でお届けします。
              </span>
            </p>
            <ul className={boxSocial}>
              {social.map((item, index) => (
                <li key={index}>
                  <img src={item.socialIcon} alt={item.socialName} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`${headerBottom} ${actHamburger ? actMenu : ''}`}>
          <div className='row'>
            <ul className={headerMenu}>
              <li>
                <NavLink onClick={() => setActHamburger(false)} to='/about'>
                  販売店について
                  <p className={menuNameEn}>about</p>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setActHamburger(false)} to='/guide'>
                  はじめての方へ
                  <p className={menuNameEn}>guide</p>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setActHamburger(false)} to='/food'>
                  商品一覧
                  <p className={menuNameEn}>food</p>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setActHamburger(false)} to='/cart'>
                  <p className={menuCartIcon}>
                    <img src={images.cart_menu} alt='' />
                    お買い物かご
                  </p>
                  <p className={menuNameEn}>cart</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${iconMenu} ${actHamburger ? change : ''}`}
          onClick={() => setActHamburger((prev) => !prev)}
        >
          <span className={bar1}></span>
          <span className={bar2}></span>
          <span className={bar3}></span>
        </div>
      </header>
      <div className='fixH' style={{ height: `${fixHeight}px` }}></div>
    </>
  );
};

export default Header;
