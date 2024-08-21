import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

type Props = { children: ReactNode; href: string; className?: string };

const Button: React.FC<Props> = ({ children, href, className }) => {
  return (
    <a href={href} className={`${styles.container} ${className || ""}`}>
      {children}
    </a>
  );
};

export default Button;
