import React from "react";
import styles from "./listItem.module.scss";

type Props = {};

const ListItem: React.FC<Props> = ({ number, children, title }) => {
  return (
    <article className={styles.container}>
      <h3> {number}.</h3>
      <h2> {title} </h2>

      {children}
    </article>
  );
};

export default ListItem;
