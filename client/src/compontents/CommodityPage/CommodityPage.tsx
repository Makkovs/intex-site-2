import { useState } from "react";
import styles from "./commodity-page.module.scss";

import novaPoshtaIcon from "../../assets/nova-poshta.png";
import ukrPoshtaIcon from "../../assets/ukr-poshta.webp";

const CommodityPage = () => {

    const available = 12    //temporary variable
    const [basketNumber, setBasketNumber] = useState<number>(1);
    const [inputVisible, setInputVisible] = useState<boolean>(false);

    const changeBasketValue = (value: number) => {
        if (value >= available) {
            setBasketNumber(available)
        } else {
            setBasketNumber(value)
        }
    }

    const checkButton = (
        event: React.KeyboardEvent<HTMLInputElement>,
        callback: (...args: any[]) => void
    ) => {
        if (event.key === "Enter") {
            callback();
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.galery}>
                <div className={styles.other_images}>
                    <img
                        className={styles.other_image}
                        src="https://raiduga.com.ua/assets/cache/images/1266ec6e80bee49e548b1923afd43126.jpg"
                        alt=""
                    />
                    <img
                        className={styles.other_image}
                        src="https://raiduga.com.ua/assets/cache/images/1266ec6e80bee49e548b1923afd43126.jpg"
                        alt=""
                    />
                    <img
                        className={styles.other_image}
                        src="https://raiduga.com.ua/assets/cache/images/1266ec6e80bee49e548b1923afd43126.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className={styles.image}
                        src="https://raiduga.com.ua/assets/cache/images/1266ec6e80bee49e548b1923afd43126.jpg"
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
                    <span className={styles.available_info}>5 продано | 12 в наявності</span> 
                    <h2 className={styles.price}>500грн</h2>
                    {basketNumber > 0
                        ?
                        <div className={styles.added_wrapper}>
                            <div className={styles.added_button}>
                                <div
                                    className={styles.piece}
                                    onClick={() => changeBasketValue(basketNumber - 1)}
                                >
                                    -
                                </div>
                                <div
                                    className={[styles.piece, styles.added].join(" ")}
                                    onClick={() => setInputVisible(!inputVisible)}
                                >
                                    {basketNumber} Додано
                                </div>
                                <div
                                    className={styles.piece}
                                    onClick={() => changeBasketValue(basketNumber + 1)}
                                >
                                    +
                                </div>
                            </div>
                            {inputVisible &&
                                <input
                                    className={styles.added_input}
                                    type="number"
                                    value={basketNumber}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        changeBasketValue(Number(event.target.value))
                                    }
                                    onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                                        checkButton(event, () => setInputVisible(false))
                                    }
                                />

                            }
                        </div>
                        :
                        <div
                            className={styles.add_button}
                            onClick={() => setBasketNumber(1)}
                        >
                            Додати в кошик
                        </div>
                    }
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
    )
}

export default CommodityPage;