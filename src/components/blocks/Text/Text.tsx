import React, { ReactNode } from "react";
import styles from "./Text.module.scss";

type Props = { children: ReactNode; title?: string; slogan?: boolean };

const Text: React.FC<Props> = ({ title, children, slogan }) => {
  return (
    <section className={styles.container}>
      {title && <h2>{title}</h2>}

      <div className={slogan ? styles.slogan : ""}>{children}</div>
    </section>
  );
};

export default Text;
