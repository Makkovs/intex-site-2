import { FC, useState } from "react";

import novaPoshtaIcon from "../../../assets/nova-poshta.png";
import ukrPoshtaIcon from "../../../assets/ukr-poshta.webp";
import BasketButton from "../BasketButton/BasketButton";

import styles from "./commodity-info.module.scss";

interface CommodityPageProps {
  available: number,
  images: string[],
}

const CommodityInfo: FC<CommodityPageProps> = ({ available, images }) => {

  const [basketNumber, setBasketNumber] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string>(images[0])

  return (
    <div className={styles.information_wrapper}>
      <div className={styles.galery}>
        <div className={styles.other_images}>
          {images.map((img: string, index: number) =>
            <img
              className={selectedImage === img
                ? [styles.other_image, styles.other_selected_image].join(" ")
                : styles.other_image
              }
              src={img}
              alt=""
              key={`${img}${index}`}
              onClick={() => setSelectedImage(img)}
            />
          )}
        </div>
        <div>
          <img
            className={styles.image}
            src={selectedImage}
            alt=""
          />
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.main_information}>
          <h2 className={styles.title}>Блокнот</h2>
          <span className={styles.rating}>
            <span className={styles.rating_number}>4.0</span>
            ★ ★ ★ ★ ☆
          </span> <br />
          <span className={styles.available_info}>5 продано | {available} в наявності</span>
          <h2 className={styles.price}>500грн</h2>
          <BasketButton max={available} value={basketNumber} setValue={setBasketNumber} />
        </div>
        <div className={styles.delivery_info}>
          <h3 className={styles.delivery_title}>Доставка</h3>
          <div className={styles.delivery_row}>
            <img className={styles.delivery_icon} src={novaPoshtaIcon} alt="" />
            <div>Нова пошта </div>
          </div>
          <div className={styles.delivery_row}>
            <img className={styles.delivery_icon} src={ukrPoshtaIcon} alt="" />
            <div>Укр пошта</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommodityInfo;