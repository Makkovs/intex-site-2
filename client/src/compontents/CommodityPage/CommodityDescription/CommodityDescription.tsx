import { FC, useState } from "react";
import Commodity from "../../Catalog/Commodity/Commodity";
import anonymusIcon from "../../../assets/anonymus.png";

import styles from "./commodity-description.module.scss";


enum menuPages {
  ANOTHER = "ANOTHER",
  CHARACTERISTICS = "CHARACTERISTICS",
  COMMENTARIES = "COMMENTARIES"
}

const CommodityDescription: FC = () => {

  const [selectedMenuOption, setSelectedMenuOption] = useState<menuPages>(menuPages.ANOTHER)

  return (
    <div className={styles.description}>
      <div className={styles.menu}>
        <input
          className={styles.menu_button_radio}
          type="radio"
          name="menu_radio"
          id="another"
          value={menuPages.ANOTHER}
          checked={menuPages.ANOTHER === selectedMenuOption}
          onClick={() => setSelectedMenuOption(menuPages.ANOTHER)}
        />
        <label className={styles.menu_button} htmlFor="another">
          Схожі товари
        </label>
        <input
          className={styles.menu_button_radio}
          type="radio"
          name="menu_radio"
          id="characteristics"
          value={menuPages.CHARACTERISTICS}
          checked={menuPages.CHARACTERISTICS === selectedMenuOption}
          onClick={() => setSelectedMenuOption(menuPages.CHARACTERISTICS)}
        />
        <label className={styles.menu_button} htmlFor="characteristics">
          Характеристики
        </label>
        <input
          className={styles.menu_button_radio}
          type="radio"
          name="menu_radio"
          id="commentaries"
          value={menuPages.COMMENTARIES}
          checked={menuPages.COMMENTARIES === selectedMenuOption}
          onClick={() => setSelectedMenuOption(menuPages.COMMENTARIES)}
        />
        <label className={styles.menu_button} htmlFor="commentaries">
          Відгуки
        </label>
      </div>
      {selectedMenuOption === menuPages.ANOTHER &&
        <div className={styles.another_commodity}>
          <Commodity smallVersion={true} />
          <Commodity smallVersion={true} />
          <Commodity smallVersion={true} />
          <Commodity smallVersion={true} />
        </div>
      }
      {selectedMenuOption === menuPages.CHARACTERISTICS &&
        <table className={styles.characteristics}>
          <tr>
            <th>Кількість сторінок</th>
            <th>60</th>
          </tr>
          <tr>
            <th>Розмір сторінки</th>
            <th>А5</th>
          </tr>
          <tr>
            <th>Виробник</th>
            <th>Blocknot Company</th>
          </tr>
        </table>
      }
      {selectedMenuOption === menuPages.COMMENTARIES &&
        <div className={styles.commentaries}>
          <div className={styles.commentary}>
            <div className={styles.author}>
              <img className={styles.avatar} src={anonymusIcon} alt="avatar" />
              <h4 className={styles.author_name}>Хтось Там</h4>
              <span className={styles.rating}>
                ★ ★ ★ ★ ☆
              </span>
            </div>
            <p className={styles.comment_body}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, voluptatum?
              Doloribus blanditiis sint excepturi, omnis temporibus eum provident nemo assumenda?
            </p>
          </div>
          <div className={styles.commentary}>
            <div className={styles.author}>
              <img className={styles.avatar} src={anonymusIcon} alt="avatar" />
              <h4 className={styles.author_name}>Хтось Там</h4>
              <span className={styles.rating}>
                ★ ★ ★ ★ ★
              </span>
            </div>
            <p className={styles.comment_body}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, voluptatum?
              Doloribus blanditiis sint excepturi, omnis temporibus eum provident nemo assumenda?
            </p>
          </div>
          <div className={styles.commentary}>
            <div className={styles.author}>
              <img className={styles.avatar} src={anonymusIcon} alt="avatar" />
              <h4 className={styles.author_name}>Хтось Там</h4>
              <span className={styles.rating}>
                ★ ★ ★ ☆ ☆
              </span>
            </div>
            <p className={styles.comment_body}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, voluptatum?
              Doloribus blanditiis sint excepturi, omnis temporibus eum provident nemo assumenda?
            </p>
          </div>
        </div>
      }
    </div>
  )
}

export default CommodityDescription;