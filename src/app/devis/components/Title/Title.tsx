import React, { ReactNode } from "react";
import styles from "./Title.module.scss";

type Props = { title: string; children?: ReactNode };

const Title: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h2> {title} </h2>

      {children && <span>{children}</span>}
    </div>
  );
};

export default Title;
