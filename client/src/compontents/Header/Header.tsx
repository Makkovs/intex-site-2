import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import SelectMenu from "../UI/SelectMenu/SelectMenu";
import search from "../../assets/search-icon.svg";
import BasketModal from "../BasketModal/BasketModal";

import { HOME_ROUTE } from "../../utils/paths";

import styles from "./header.module.scss";

const Header: FC = () => {

    const [selectedSort, setSelectedSort] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <NavLink className={styles.logo} to={HOME_ROUTE}>
                INTEX
            </NavLink>
            <SelectMenu
                className={[styles.button, styles.button_main].join(" ")}
                name="Сортування"
                selectedOption={selectedSort}
                setSelectedOption={setSelectedSort}
                options={["Популярні", "Дорожчі", "Дешевші", "Рейтинг"]}
            />
            <SelectMenu
                className={[styles.button, styles.button_main].join(" ")}
                name="Категорії"
                options={["Канцелярія", "Ігри", "Зошити"]}
                selectedOption={selectedCategory}
                setSelectedOption={setSelectedCategory}
            />
            <div className={styles.search}>
                <input className={styles.input} type="text" placeholder="Пошук" />
                <img className={styles.searchIcon} src={search} />
            </div>
            <input className={styles.burger_checkbox} type="checkbox" name="burger-check" id="burger" />
            <label className={styles.burger_menu} htmlFor="burger">
                <div className={styles.burger_line}></div>
                <div className={styles.burger_line}></div>
                <div className={styles.burger_line}></div>
            </label>
            <div className={styles.burger_body}>
                <div className={styles.body_select}>
                    <SelectMenu
                        className={styles.button}
                        name="Сортування"
                        selectedOption={selectedSort}
                        setSelectedOption={setSelectedSort}
                        options={["Популярні", "Дорожчі", "Дешевші", "Рейтинг"]}
                    />
                    <SelectMenu
                        className={styles.button}
                        name="Категорії"
                        options={["Канцелярія", "Ігри", "Зошити"]}
                        selectedOption={selectedCategory}
                        setSelectedOption={setSelectedCategory}
                    />
                </div>
                <div className={styles.button} onClick={() => setVisible(true)}>
                    Кошик
                </div>
            </div>
            <div className={[styles.button, styles.button_main].join(" ")} onClick={() => setVisible(true)}>
                Кошик
            </div>
            <BasketModal visible={visible} setVisible={setVisible} />
        </header>
    )
}

export default Header;