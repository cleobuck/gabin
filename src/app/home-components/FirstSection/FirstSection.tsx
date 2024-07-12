import React from "react";
import styles from "./FirstSection.module.scss";
import Image from "next/image";
import DevisButton from "@/components/items/Button/DevisButton";
import Sun from "@/assets/images/sun.svg?react";
import TentImage from "@/assets/images/placeholder.jpeg";

type Props = {};

const FirstSection: React.FC<Props> = ({}) => {
  return (
    <section className={styles.firstSection}>
      <h1> Location et installation de tentes de réception sur mesure </h1>

      <figure className={styles.image}>
        <Image src={TentImage} alt="tent" fill={true} />
      </figure>

      <div className={styles.buttonPart}>
        <DevisButton className={styles.devisButton} />

        <Sun className={styles.sun} />
      </div>
    </section>
  );
};

export default FirstSection;
