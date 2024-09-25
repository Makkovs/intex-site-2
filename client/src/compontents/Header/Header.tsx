import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SelectMenu from "../UI/SelectMenu/SelectMenu";
import BasketModal from "../BasketModal/BasketModal";
import SelectMenus from "./SelectMenus/SelectMenus";
import AuthModal from "../AuthModal/AuthModal";

import { RootState } from "../../store";
import { setSearch } from "../../store/filterSlice";
import { HOME_ROUTE } from "../../utils/paths";

import styles from "./header.module.scss";
import userIcon from "../../assets/user.png";
import search from "../../assets/search-icon.svg";

const Header: FC = () => {

    const dispatch = useDispatch();
    const [selectedSort, setSelectedSort] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [basketVisible, setBasketVisible] = useState<boolean>(false);
    const [authVisible, setAuthVisible] = useState<boolean>(false);

    const user = useSelector((state: RootState) => state.user);
    const searchValue = useSelector((state: RootState) => state.filter.search);

    return (
        <header className={styles.header}>
            <NavLink className={styles.logo} to={HOME_ROUTE}>
                INTEX
            </NavLink>
            <SelectMenus className={styles.button_main}/>
            <div className={styles.search}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Пошук"
                    value={searchValue}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                />
                <img className={styles.searchIcon} src={search} alt="search"/>
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
                    <SelectMenus />
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
                    <div className={styles.mobile_auth}>
                        <input 
                            className={styles.mobile_auth_checkbox} 
                            type="checkbox" 
                            name="mobile_auth" 
                            id="mobile_auth" 
                        />
                        <label
                            className={styles.button}
                            onClick={() => { if (!user.isAuth) setAuthVisible(true) }}
                            htmlFor="mobile_auth"
                        >
                            Аккаунт
                        </label>
                        <div className={styles.mobile_auth_window}>
                            Ввійдено як: {user.phoneNumber ? user.phoneNumber : user.email} <br />
                            <a href="">Вийти</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={[styles.button, styles.button_main].join(" ")} onClick={() => setBasketVisible(true)}>
                Кошик
            </div>
            <div className={styles.auth_info}>
                <img
                    className={[styles.button, styles.button_main, styles.button_img].join(" ")}
                    src={userIcon}
                    alt="account"
                    onClick={() => { if (!user.isAuth) setAuthVisible(true) }}
                />
                {user.isAuth &&
                    <div className={styles.authorized_window}>
                        Ввійдено як: {user.phoneNumber ? user.phoneNumber : user.email} <br />
                        <a href="">Вийти</a>
                    </div>
                }
            </div>
            <BasketModal visible={basketVisible} setVisible={setBasketVisible} />
            <AuthModal visible={authVisible} setVisible={setAuthVisible} />
        </header>
    )
}

export default Header;