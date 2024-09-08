import { useState } from "react";
import styles from "./basket-commodity.module.scss";

const BasketCommodity = () => {

    const [amount, setAmount] = useState<number>(2);

    return (
        <div className={styles.commodity}>
            <img
                className={styles.commodity_img}
                src="https://raiduga.com.ua/assets/cache/images/1266ec6e80bee49e548b1923afd43126.jpg"
                alt=""
            />
            <div>
                <h3 className={styles.info}>Блокнот</h3>
                <h3>{500*amount}грн</h3>
            </div>
            <div className={styles.button_wrapper}>
                <div
                    className={[styles.minus, styles.button].join(" ")}
                    onClick={() => setAmount(amount - 1)}
                >
                    -
                </div>
                <input
                    className={styles.input}
                    type="number"
                    value={amount}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                        setAmount(Number(event.target.value))
                    }
                />
                <div
                    className={[styles.plus, styles.button].join(" ")}
                    onClick={() => setAmount(amount + 1)}
                >
                    +
                </div>
            </div>
        </div>
    );
}

export default BasketCommodity;