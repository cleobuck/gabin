import React, { ReactNode, forwardRef } from "react";
import styles from "./listItem.module.scss";

type Props = {
  number: number;
  children: ReactNode;
  title: string;
  className?: string;
};

const ListItem = forwardRef<HTMLDivElement, Props>(
  ({ number, children, title, className }, ref) => {
    return (
      <article ref={ref} className={`${styles.container} ${className}`}>
        <h3>{number}.</h3>
        <h2>{title}</h2>
        {children}
      </article>
    );
  }
);

ListItem.displayName = "ListItem";

export default ListItem;
