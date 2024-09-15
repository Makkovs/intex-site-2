import { useState } from "react";
import styles from "./order-page.module.scss";
import BasketCommodity from "../BasketModal/BasketCommodity/BasketCommodity";

const OrderPage = () => {

    const [isNumber, setIsNumber] = useState<boolean>(true);

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h2>Оформлення замовлення</h2>
                <h3>Виконайти вхід для замовлення</h3>
                <div className={styles.login}>
                    {isNumber
                        ?
                        <>
                            <span className={styles.input_name}>
                                Телефон
                            </span>
                            <div className={styles.phone_wrapper}>
                                <div className={styles.ukr_phone}>
                                    +38
                                </div>
                                <input
                                    className={[styles.input, styles.number_input].join(" ")}
                                    type="text"
                                />
                            </div>

                        </>
                        :
                        <>
                            <span className={styles.input_name}>
                                Пошта
                            </span>
                            <input
                                className={styles.input}
                                type="text"
                            />
                        </>
                    }

                    <button className={styles.submit}>
                        Продовжити
                    </button>
                    <span
                        className={styles.another_type}
                        onClick={() => setIsNumber(!isNumber)}
                    >
                        Увійти через пошту
                    </span>
                </div>
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
            <div className={styles.verif}>
                <div className={styles.verif_title}>
                    <h3>Всього</h3>
                    <h2>2000грн</h2>
                </div>
                <BasketCommodity />
                <BasketCommodity />
            </div>
        </div>
    );
}

export default OrderPage;