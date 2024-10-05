import { FC, useState } from "react";

import Modal from "../UI/Modal/Modal";

import styles from "./auth-modal.module.scss";

interface AuthModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const AuthModal: FC<AuthModalProps> = ({ visible, setVisible }) => {

  const [isNumber, setIsNumber] = useState<boolean>(true);

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
    >
      <div className={styles.login}>
        <h2>Вхід</h2>
        {isNumber
          ?
          <>
            <span className={styles.input_name}>
              Телефон
            </span>
            <div className={styles.phone_wrapper}>
              <div className={styles.ukr_phone}>
                +38
              </div>
              <input
                className={[styles.input, styles.number_input].join(" ")}
                type="text"
              />
            </div>

          </>
          :
          <>
            <span className={styles.input_name}>
              Пошта
            </span>
            <input
              className={styles.input}
              type="text"
            />
          </>
        }

        <button className={styles.submit}>
          Продовжити
        </button>
        <span
          className={styles.another_type}
          onClick={() => setIsNumber(!isNumber)}
        >
          Увійти через {isNumber ? "пошту" : "телефон"}
        </span>
      </div>
    </Modal>
  )
}

export default AuthModal;