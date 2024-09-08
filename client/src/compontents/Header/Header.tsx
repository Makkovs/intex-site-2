import { FC, useState } from "react";
import SelectMenu from "../UI/SelectMenu/SelectMenu";
import search from "../../assets/search-icon.svg";

import styles from "./header.module.scss";
import BasketModal from "../BasketModal/BasketModal";

const Header: FC = () => {

    const [selectedSort, setSelectedSort] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <h2 className={styles.logo}>
                INTEX
            </h2>
            <SelectMenu
                className={styles.button}
                name="Сортування"
                selectedOption={selectedSort}
                setSelectedOption={setSelectedSort}
                options={["Популярні", "Дорожчі", "Дешевші", "Рейтинг"]}
            />
            <SelectMenu
                name="Категорії"
                options={["Канцелярія", "Ігри", "Зошити"]}
                selectedOption={selectedCategory}
                setSelectedOption={setSelectedCategory}
            />
            <div className={styles.search}>
                <input className={styles.input} type="text" placeholder="Пошук" />
                <img className={styles.searchIcon} src={search} alt="" />
            </div>
            <div className={styles.button}>
                Підтримка
            </div>
            <div className={styles.button} onClick={() => setVisible(true)}>
                Кошик
            </div>
            <BasketModal visible={visible} setVisible={setVisible} />
        </header>
    )
}

export default Header;