import { FC, useState } from "react";

import styles from "./basket-button.module.scss";

interface BasketButtonProps {
  max: number;
  value: number;
  setValue: (state: number) => void;
}

const BasketButton: FC<BasketButtonProps> = ({ max, value, setValue }) => {

  const [inputVisible, setInputVisible] = useState<boolean>(false);

  const changeBasketValue = (value: number) => {
    if (value >= max) {
      setValue(max)
    } else {
      setValue(value)
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
    <>
      {value > 0
        ?
        <div className={styles.added_wrapper}>
          <div className={styles.added_button}>
            <div
              className={styles.piece}
              onClick={() => changeBasketValue(value - 1)}
            >
              -
            </div>
            <div
              className={[styles.piece, styles.added].join(" ")}
              onClick={() => setInputVisible(!inputVisible)}
            >
              {value} Додано
            </div>
            <div
              className={styles.piece}
              onClick={() => changeBasketValue(value + 1)}
            >
              +
            </div>
          </div>
          {inputVisible && value > 0 &&
            <input
              className={styles.added_input}
              type="number"
              value={value}
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
          onClick={() => setValue(1)}
        >
          Додати в кошик
        </div>
      }
    </>
  )
}

export default BasketButton;