import { FC } from "react";
import Modal from "../UI/Modal/Modal";
import styles from "./basket-modal.module.scss";
import BasketCommodity from "./BasketCommodity/BasketCommodity";
import { NavLink } from "react-router-dom";
import { ORDER_ROUTE } from "../../utils/paths";

interface BasketModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const BasketModal: FC<BasketModalProps> = ({ visible, setVisible }) => {

    return (
        <Modal
            visible={visible}
            setVisible={setVisible}
        >
            <h2 className={styles.title}>Кошик</h2>
            <BasketCommodity />
            <BasketCommodity />
            <BasketCommodity />
            <NavLink
                className={styles.button}
                onClick={() => setVisible(false)}
                to={ORDER_ROUTE}
            >
                Замовити
            </NavLink>
        </Modal>
    );
}

export default BasketModal;