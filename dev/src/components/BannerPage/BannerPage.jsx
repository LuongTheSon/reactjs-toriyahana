import React from 'react';
import { images } from '@assets/images/image';
import styles from './style.module.scss';

const BannerPage = () => {
  const { bannerPage } = styles;
  return (
    <section className={bannerPage}>
      <figure>
        <img src={images.page_banner} alt='' />
      </figure>
    </section>
  );
};

export default BannerPage;
