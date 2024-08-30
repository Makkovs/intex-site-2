import styles from "./catalog.module.scss";
import Commodity from "./Commodity/Commodity";

const Catalog = () => {

    return (
        <div className={styles.catalog}>
            <Commodity />
            <Commodity />
            <Commodity />
            <Commodity />
            <Commodity />
            <Commodity />
            <Commodity />
            <Commodity />
            <Commodity />
        </div>
    )
}

export default Catalog;