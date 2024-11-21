import React from 'react';
import styles from './style.module.scss';
import BannerPage from '@components/BannerPage/BannerPage';

const Guide = () => {
  const {
    ttlPage,
    boxInfor,
    listInfor,
    textList,
    titleList,
    areaSubheading,
    areaButton
  } = styles;
  return (
    <>
      <BannerPage />
      <section>
        <div className='row'>
          <div className='wrapBox'>
            <h2 className={ttlPage}>はじめての方へ</h2>
            <div className={boxInfor}>
              <ul className={listInfor}>
                <li>
                  <p className={textList}>
                    オンラインショップ「寿地鶏」へお越しいただきありがとうございます。
                    <br />
                    当サイトを初めてご利用される方に向けて、当サイトの情報やご利用方法をご案内します。
                  </p>
                </li>
                <li>
                  <h4 className={titleList}>
                    オンラインショップ「寿地鶏」について
                  </h4>
                  <p className={textList}>
                    当サイトで販売する商品は、自社で所有する長野県の広大な養鶏場から獲れた鶏を販売しています。自社の養鶏場だから出来る豊富なバリエーションと希少部位をお届けいたします。
                  </p>
                </li>
                <li>
                  <h4 className={titleList}>配送・送料について</h4>
                  <h5 className={areaSubheading}>ヤマト運輸（クール便）</h5>
                  <p className={`${styles.textList} ${styles.textGuide}`}>
                    冷凍・チルド品はクール便にて発送いたします。
                    <br />
                    <br />
                    ※冷凍品と常温品を同時に注文いただいた場合、冷凍便（同梱）での発送となります。
                    <br />
                    ※冷凍品とチルド品を同時にお買い上げの場合は冷凍便（同梱）での発送となります。
                    <br />
                    （個別包装をご希望の場合は、ご注文についても個別にお願いいたします。）{' '}
                  </p>
                  <h5 className={areaSubheading}>ヤマト運輸（常温）</h5>
                  <p className={`${styles.textList} ${styles.textGuide}`}>
                    常温品のみをご注文の方は通常発送となります。
                  </p>
                  <h5 className={areaSubheading}>
                    ［温度帯の異なる商品を同時にご注文の場合］{' '}
                  </h5>
                  <p className={`${styles.textList} ${styles.textGuide}`}>
                    常温・チルド・冷凍の異なる商品を同時ご注文の場合、下記の温度帯での発送となります。{' '}
                    <br />
                    <br />
                    ・チルド品と冷凍品→冷凍での発送。 <br />
                    ・常温品と冷凍品→冷凍での発送。 <br />
                    ・常温品とチルド品→冷蔵での発送。 <br />
                    <br />
                    ※各温度帯にて発送をご希望の場合は、それぞれの商品でカート決済をお願いいたします。{' '}
                    <br />
                    （それぞれにお届けの料金が発生いたします。）{' '}
                  </p>
                  <h5 className={areaSubheading}>［通常便（常温）］</h5>
                  <p className={`${styles.textList} ${styles.textGuide}`}>
                    北海道・九州／￥1,370　北東北・関西／￥1,040　南東北・関東・信越・北陸・中部／￥930
                    <br />
                    中国・四国／￥1,150　沖縄／￥1,480
                  </p>
                  <h5 className={areaSubheading}>
                    ［クール便（冷凍・チルド）］
                  </h5>
                  <p className={`${styles.textList} ${styles.textGuide}`}>
                    通常便（常温）+220円
                    <br />
                    <br />※ 1箇所へお届けの料金となります。
                    <br />※ 1箇所発送・約
                    10ｋｇ未満は1回の送料で発送可能です。箱サイズ、個数により異なる場合がございます。
                  </p>
                </li>
                <li>
                  <h4 className={titleList}>支払い方法について</h4>
                  <p className={textList}>
                    ●クレジットカード
                    <br />
                    ご注文確定後、画面の表示にしたがいお手続きください。
                    <br />
                    ※支払い回数はクレジットカード会社によって異なります。 <br />
                    <br />
                    ●銀行振込
                    <br />
                    弊社指定口座へのご入金確認後、商品を発送致します。
                    <br />
                    <br />
                    〈振込先口座〉
                    <br />
                    ●みずほ銀行　笹塚支店　普通／ <br />
                    指定口座へのご入金確認後、商品を発送致します。
                    <br />
                    <br />
                    ※お振込み手数料はお客様のご負担となりますのでご了承ください。
                    <br />
                    ※注文確認メールをお送りしたのち、7日以内にお支払いがなければ、キャンセル扱いとさせていただきます。
                    <br />
                    <br />
                    ●代金引換
                    <br />
                    商品到着時に、総額をヤマト配達員にお支払いください。
                    <br />
                    ※決済金額に応じて代引き手数料が発生いたします。
                  </p>
                </li>
              </ul>
              <p className={areaButton}>
                <a href='javascript:void(0)' className='hover'>
                  ショップへ戻る
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Guide;
