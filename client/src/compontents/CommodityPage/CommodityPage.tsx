import { FC } from "react";

import CommodityInfo from "./CommodityInfo/CommodityInfo";
import CommodityDescription from "./CommodityDescription/CommodityDescription";

import styles from "./commodity-page.module.scss";

const images = [
  "https://raiduga.com.ua/assets/cache/images/1266ec6e80bee49e548b1923afd43126.jpg",
  "https://www.papirus.com.ua/img/goods/13870.jpg",
  "https://fullmotion.com.ua/images/products/product_views/0/636.jpg",
  "https://hidemont.com.ua/media/catalog/product/cache/5f663e2459d4e280cc76674d635213a8/3/_/3_0369s_aro-22920-003.jpg",
];

const CommodityPage: FC = () => {

  return (
    <div className={styles.wrapper}>
      <CommodityInfo
        available={12}
        images={images}
      />
      <CommodityDescription />
    </div>
  )
}

export default CommodityPage;