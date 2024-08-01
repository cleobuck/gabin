import React, { ReactNode } from "react";
import styles from "./Text.module.scss";

type Props = {
  children: ReactNode;
  title?: string;
  slogan?: boolean;
  author?: string;
  className?: string;
};

const Text: React.FC<Props> = ({
  title,
  children,
  slogan,
  author,
  className,
}) => {
  return (
    <section
      className={`${styles.container} ${slogan ? styles.sloganSection : ""} ${
        className ? className : ""
      }`}
    >
      {title && <h2>{title}</h2>}

      <div className={slogan ? styles.slogan : ""}>{children}</div>

      {author && <div className={styles.author}> {author} </div>}
    </section>
  );
};

export default Text;
