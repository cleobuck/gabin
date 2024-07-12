import React, { ReactNode } from "react";
import styles from "./Text.module.scss";

type Props = {
  children: ReactNode;
  title?: string;
  slogan?: boolean;
  author?: string;
};

const Text: React.FC<Props> = ({ title, children, slogan, author }) => {
  return (
    <section
      className={`${styles.container} ${slogan ? styles.sloganSection : ""}`}
    >
      {title && <h2>{title}</h2>}

      <div className={slogan ? styles.slogan : ""}>{children}</div>

      {author && <div className={styles.author}> {author} </div>}
    </section>
  );
};

export default Text;
