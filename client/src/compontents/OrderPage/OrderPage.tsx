import { useEffect, useState } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

import AuthModal from "../AuthModal/AuthModal";
import BasketCommodity from "../BasketModal/BasketCommodity/BasketCommodity";

import styles from "./order-page.module.scss";

const OrderPage = () => {

  const user = useSelector((state: RootState) => state.user);
  const [authVisible, setAuthVisible] = useState(false);

  useEffect(() => {
    if (!user.isAuth) {
      setAuthVisible(true);
    }
  }, [user, authVisible]);

  return (
    <div className={styles.wrapper}>
      <AuthModal visible={authVisible} setVisible={setAuthVisible} />
      <div className={styles.verif}>
        <h3>Оформлення замовлення</h3>
        <div className={styles.verif_title}>
          <h3>Всього</h3>
          <h3>2000грн</h3>
        </div>
        <BasketCommodity />
        <BasketCommodity />
      </div>
      <div className={styles.info}>
        <div className={styles.delivery}>
          <h3>Доставка</h3>
          <input
            className={styles.input_radio}
            type="radio"
            name="delivery"
            id="novaposhta"
          />
          <label className={styles.new_radio_container} htmlFor="novaposhta">
            <div className={styles.new_radio}>
              <div className={styles.new_radio_center}></div>
            </div>
            Доставка Новою Поштою
          </label>
          <input
            className={styles.input_radio}
            type="radio"
            name="delivery"
            id="ukrposhta"
          />
          <label className={styles.new_radio_container} htmlFor="ukrposhta">
            <div className={styles.new_radio}>
              <div className={styles.new_radio_center}></div>
            </div>
            Доставка УкрПоштою
          </label>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;