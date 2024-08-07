"use client";

import React from "react";
import styles from "./FirstSection.module.scss";
import Image from "next/image";
import DevisButton from "@/components/items/Button/DevisButton";
import Sun from "@/assets/images/sun.svg?react";
import TentImage from "@/assets/images/placeholder.jpeg";
import { IsItAPhone } from "@/utils";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";

type Props = {};

const FirstSection: React.FC<Props> = ({}) => {
  const isPhone = IsItAPhone();
  return (
    <section className={styles.firstSection}>
      <h1> Location et installation de tentes de réception sur mesure </h1>

      <ImageWithCredit src={TentImage} alt="tent" className={styles.image}>
        {!isPhone && <Sun className={styles.sun} />}
      </ImageWithCredit>

      <div className={styles.buttonPart}>
        <DevisButton className={styles.devisButton} />

        {isPhone && <Sun className={styles.sun} />}
      </div>
    </section>
  );
};

export default FirstSection;
