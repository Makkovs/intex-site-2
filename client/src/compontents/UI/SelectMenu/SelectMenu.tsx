import { FC } from "react";
import styles from "./select-menu.module.scss";

interface SelectMenuProps {
  className?: string;
  name: string;
  selectedOption: string | null;
  setSelectedOption: (state: string | null) => any;
  options: string[];
}

const SelectMenu: FC<SelectMenuProps> = ({ className, name, selectedOption, setSelectedOption, options }) => {

  return (
    <div className={
      className ? [styles.list, className].join(" ") : styles.list
    }>
      {selectedOption ? selectedOption : name}
      <ul className={styles.modal}>
        {selectedOption &&
          <li
            className={styles.option}
            onClick={() => setSelectedOption(null)}
          >
            Видалити
          </li>
        }
        {options.map((option: string) =>
          <li
            className={styles.option}
            onClick={() => setSelectedOption(option)}
            key={`${option}#selectMenu`}
          >
            {option}
          </li>
        )}
      </ul>
    </div>
  )
};

export default SelectMenu;