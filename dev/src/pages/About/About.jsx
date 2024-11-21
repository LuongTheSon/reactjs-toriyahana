import React from 'react';
import styles from './style.module.scss';
import BannerPage from '@components/BannerPage/BannerPage';

const About = () => {
  const { ttlPage, boxInfor, listToku, titleList, tableToku, areaButton } =
    styles;
  return (
    <>
      <BannerPage />
      <section>
        <div className='row'>
          <div className='wrapBox'>
            <h2 className={ttlPage}>特定商取引法に基づく表記</h2>
            <div className={boxInfor}>
              <div className={listToku}>
                <h4 className={titleList}>事業者について</h4>
                <table className={tableToku}>
                  <tbody>
                    <tr>
                      <th>販売事業者（会社名）</th>
                      <td>有限会社和楽コーポレーション</td>
                    </tr>
                    <tr>
                      <th>運営責任者</th>
                      <td>指澤 信彦</td>
                    </tr>
                    <tr>
                      <th>所在地</th>
                      <td>〒399-8301 長野県安曇野市穂高有明7406-2</td>
                    </tr>
                    <tr>
                      <th>電話番号</th>
                      <td>
                        <a href='tel:0261854974'>0261-85-4974</a>
                      </td>
                    </tr>
                    <tr>
                      <th>メールアドレス</th>
                      <td>nsashizawa@yahoo.co.jp</td>
                    </tr>
                    <tr>
                      <th>取扱商品</th>
                      <td>食品</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={listToku}>
                <h4 className={titleList}>お支払い、発送について</h4>
                <table className={tableToku}>
                  <tbody>
                    <tr>
                      <th>商品価格</th>
                      <td>各商品の販売ページをご覧ください。 </td>
                    </tr>
                    <tr>
                      <th>代金の支払方法・期限</th>
                      <td>
                        クレジットカード払い、代金引換払い、銀行振込がご利用いただけます。
                        <br />
                        銀行振込の場合は、注文後7日以内にお支払いがなければキャンセル扱いとさせていただきます。
                      </td>
                    </tr>
                    <tr>
                      <th>商品代金以外の必要料金</th>
                      <td>
                        ●銀行振込でご購入の際の振込手数料
                        <br />
                        ●代金引換でご購入の際の代引手数料
                        <br />
                        　決済金額に応じて代引き手数料が発生いたします。
                        <br />
                        　代引き手数料：１万円未満300円（税別）
                        <br />
                        　３万円未満400円（税別）　３万円以上600円（税別）
                        <br />
                        　１０万円以上３０万円まで1000円（税別）です。
                        <br />
                        ●送料
                      </td>
                    </tr>
                    <tr>
                      <th>商品の引渡し時期</th>
                      <td>
                        クレジットカード払い、代金引換払い：
                        <br />
                        ご注文日から3営業日以内にヤマト運輸にて発送
                        <br />
                        銀行振込：
                        <br />
                        入金確認後、 3営業日以内にヤマト運輸にて発送
                      </td>
                    </tr>
                    <tr>
                      <th>注文情報の確認</th>
                      <td>
                        ご購入時に入力いただいた情報に不備があった場合など、弊社からお客様へEメールやお電話にてご連絡する場合があります。予めご了承いただきますようお願いします。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={listToku}>
                <h4 className={titleList}>返品等について</h4>
                <table className={tableToku}>
                  <tbody>
                    <tr>
                      <th>キャンセル・返品・交換</th>
                      <td>
                        原則としてお客様の都合による商品のキャンセル、返品、交換、受け取り拒否はお受けできません。
                        <br />
                        <br />
                        また、到着した商品に万一不良品、商品間違いなどの不備がございましたら、到着日の翌日までにご連絡いただいたうえ、送料着払い（弊社負担）にて弊社宛にご返送ください。
                        <br />
                        <br />
                        商品を良品とお取替えさせて頂きます。返品期限はお届け日から5日以内に弊社必着とさせて頂きます。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={areaButton}>
                <a href=''>ショップへ戻る</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
