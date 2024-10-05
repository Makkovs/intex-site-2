import { FC } from "react";
import { NavLink } from "react-router-dom";
import { COMMODITY_ROUTE } from "../../../utils/paths";
import cartAddIcon from "../../../assets/cart-add.png";

import styles from "./commodity.module.scss";

interface CommodityProps {
  smallVersion?: boolean;
}

const Commodity: FC<CommodityProps> = ({ smallVersion }) => {

  return (
    <NavLink className={styles.commodity} to={COMMODITY_ROUTE + "/2"}>
      <img
        className={
          smallVersion
            ? [styles.image, styles.smallImage].join(" ")
            : styles.image
        }
        src="https://raiduga.com.ua/assets/cache/images/1266ec6e80bee49e548b1923afd43126.jpg"
      />
      <h2>Блокнот</h2>
      <div className={styles.info}>
        <div>
          500грн
        </div>
        <div>
          12 в наявності
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.rating}>
          ★ ★ ★ ★ ★
        </div>
        <div className={styles.add}>
          <img src={cartAddIcon} />
        </div>
      </div>
    </NavLink>
  );
}

export default Commodity;