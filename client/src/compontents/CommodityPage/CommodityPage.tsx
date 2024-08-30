import styles from "./commodity-page.module.scss";

const CommodityPage = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.galery}>
                <div className={styles.otherImages}>
                    <img
                        className={styles.otherImage}
                        src="https://raiduga.com.ua/assets/cache/images/1266ec6e80bee49e548b1923afd43126.jpg"
                        alt=""
                    />
                    <img
                        className={styles.otherImage}
                        src="https://raiduga.com.ua/assets/cache/images/1266ec6e80bee49e548b1923afd43126.jpg"
                        alt=""
                    />
                    <img
                        className={styles.otherImage}
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
        </div>
    )
}

export default CommodityPage;