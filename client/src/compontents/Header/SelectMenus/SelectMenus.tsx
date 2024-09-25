import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store";
import { setCategory, setSort } from "../../../store/filterSlice";
import SelectMenu from "../../UI/SelectMenu/SelectMenu";

import styles from "../header.module.scss";

interface SelectMenusProps {
    className?: string;
}

const SelectMenus:FC<SelectMenusProps> = ({className}) => {

    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.filter);

    return (
        <>
            <SelectMenu
                className={[styles.button, styles.button_main, className].join(" ")}
                name="Сортування"
                selectedOption={filters.sort}
                setSelectedOption={(state: string | null) => dispatch(setSort(state))}
                options={["Популярні", "Дорожчі", "Дешевші", "Рейтинг"]}
            />
            <SelectMenu
                className={[styles.button, styles.button_main, className].join(" ")}
                name="Категорії"
                options={["Канцелярія", "Ігри", "Зошити"]}
                selectedOption={filters.category}
                setSelectedOption={(state: string | null) => dispatch(setCategory(state))}
            />
        </>
    );
}

export default SelectMenus;