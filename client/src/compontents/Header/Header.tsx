import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import SelectMenu from "../UI/SelectMenu/SelectMenu";
import search from "../../assets/search-icon.svg";
import BasketModal from "../BasketModal/BasketModal";
import AuthModal from "../AuthModal/AuthModal";

import { HOME_ROUTE } from "../../utils/paths";
import userIcon from "../../assets/user.png";

import styles from "./header.module.scss";

const Header: FC = () => {

    const [selectedSort, setSelectedSort] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [basketVisible, setBasketVisible] = useState<boolean>(false);
    const [authVisible, setAuthVisible] = useState<boolean>(false);

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
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Пошук"
                />
                <img className={styles.searchIcon} src={search} />
            </div>
            <input
                className={styles.burger_checkbox}
                type="checkbox"
                name="burger-check"
                id="burger"
            />
            <label className={styles.burger_menu} htmlFor="burger">
                <div className={styles.burger_line}></div>
                <div className={styles.burger_line}></div>
                <div className={styles.burger_line}></div>
            </label>
            <div className={styles.burger_body}>
                <div className={styles.body_group}>
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
                <div className={styles.body_group}>
                    <div className={styles.button} onClick={() => setBasketVisible(true)}>
                        Кошик
                    </div>
                    <div className={styles.button} onClick={() => setAuthVisible(true)}>
                        Аккаунт
                    </div>
                </div>
            </div>
            <div className={[styles.button, styles.button_main].join(" ")} onClick={() => setBasketVisible(true)}>
                Кошик
            </div>
            <img
                className={[styles.button, styles.button_main, styles.button_img].join(" ")}
                src={userIcon}
                alt="account"
                onClick={() => setAuthVisible(true)}
            />
            <BasketModal visible={basketVisible} setVisible={setBasketVisible} />
            <AuthModal visible={authVisible} setVisible={setAuthVisible} />
        </header>
    )
}

export default Header;