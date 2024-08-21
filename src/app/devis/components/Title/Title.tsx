import React, { ReactNode } from "react";
import styles from "./Title.module.scss";

type Props = { title: string; children?: ReactNode; className?: string };

const Title: React.FC<Props> = ({ title, children, className }) => {
  return (
    <div className={`${styles.container} ${className ? className : ""}`}>
      <h2> {title} </h2>

      {children && <span>{children}</span>}
    </div>
  );
};

export default Title;
