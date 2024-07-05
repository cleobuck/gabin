import React from "react";
import styles from "./Text.module.scss";

type Props = {};

const Text: React.FC<Props> = ({ title, children, slogan }) => {
  return (
    <section className={styles.container}>
      {title && <h2>{title}</h2>}

      <div className={slogan ? styles.slogan : ""}>{children}</div>
    </section>
  );
};

export default Text;
