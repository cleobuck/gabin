import React from "react";
import styles from "./Button.module.scss";

type Props = {};

const Button: React.FC<Props> = ({ children, href }) => {
  return (
    <a href={href} className={styles.container}>
      {children}
    </a>
  );
};

export default Button;
