import styles from "./order-page.module.scss";  

const OrderPage = () => {
    //            <h2>Оформлення замовлення</h2>

    return (
        <div className={styles.wrapper}>
            
            <div className={styles.info}>
                <h3>Виконайти вхід для замовлення</h3>
                <div className={styles.login}>
                    <input className={styles.input} type="text" />
                </div>
            </div>
            <div className={styles.verif}>
                <h3>Всього</h3>
            </div>  
        </div>
    );
}

export default OrderPage;