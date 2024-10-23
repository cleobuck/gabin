import React from "react";
import styles from "./ButtonBlock.module.scss";
import Sun from "@/assets/icons/sun.svg?react";
import TinyLoader from "../../tiny-loader/TinyLoader";

type Props = { isSubmitting: boolean };

const ButtonBlock: React.FC<Props> = ({ isSubmitting }) => {
  return (
    <button type="submit" disabled={isSubmitting} className={styles.button}>
      <span className={styles.sunContainer}>
        <Sun className={styles.sun} />
      </span>
      <span className={styles.title}>
        {isSubmitting ? <TinyLoader /> : "ENVOYER"}
      </span>
      <span className={styles.sunContainer}>
        <Sun className={styles.sun} />
      </span>
    </button>
  );
};

export default ButtonBlock;
