import React from "react";
import styles from "./TentConfig.module.scss";

type Props = {};

const TentConfig: React.FC<Props> = ({ title, list }) => {
  return (
    <div className={styles.container}>
      <h4> {title} </h4>

      <ul>
        {" "}
        {list.map((elem, index) => (
          <li key={index}> {elem} </li>
        ))}
      </ul>
    </div>
  );
};

export default TentConfig;
