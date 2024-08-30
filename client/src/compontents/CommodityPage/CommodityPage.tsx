import { ReactHTMLElement, useState } from "react";
import styles from "./commodity-page.module.scss";

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
                <h2>Блокнот</h2>
                <span>5 продано | 12 в наявності</span>
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
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                    changeBasketValue(Number(e.target.value))
                                }
                            />

                        }
                    </div>
                    :
                    <button
                        className={styles.add_button}
                        onClick={() => setBasketNumber(1)}
                    >
                        Додати в кошик
                    </button>
                }
            </div>
        </div>
    )
}

export default CommodityPage;