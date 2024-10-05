import { FC } from "react";
import Commodity from "./Commodity/Commodity";

import styles from "./catalog.module.scss";

const Catalog: FC = () => {

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