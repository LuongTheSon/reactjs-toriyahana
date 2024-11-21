import React from 'react';
import styles from '../style.module.scss';
import { images } from '@assets/images/image';

const Banner = () => {
  const {
    banner,
    bannerCnt,
    bannerName,
    bannerNameEn,
    bannerTtl,
    bannerDescript
  } = styles;
  return (
    <section className={banner}>
      <figure>
        <img src={images.Home_banner} alt='' />
      </figure>
      <div className={bannerCnt}>
        <h2 className={bannerName}>
          寿地鶏<span className={bannerNameEn}>ONLINE SHOP</span>
        </h2>
        <h3 className={bannerTtl}>希少部位専門店</h3>
        <p className={bannerDescript}>−自社養鶏場から全国へ直送−</p>
      </div>
    </section>
  );
};

export default Banner;
