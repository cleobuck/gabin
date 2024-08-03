import React from "react";
import styles from "./TentConfig.module.scss";
import { Butterfly_Kids } from "next/font/google";
import Button from "@/components/items/Button/Button";

type Props = { title: string; list: string[] };

const TentConfig: React.FC<Props> = ({ title, list }) => {
  return (
    <div className={styles.container}>
      <h4> {title} </h4>

      <ul>
        {list.map((elem, index) => (
          <li key={index}> {elem} </li>
        ))}
      </ul>

      <Button className={styles.simulateButton} href="">
        <> </>
        <span> SIMULER MON </span>
        <span> PLAN DE TABLE</span>
      </Button>
    </div>
  );
};

export default TentConfig;
