"use client";
import React from "react";
import styles from "./OurValues.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";
import Image from "next/image";
import ValueSlider from "@/components/sections/ValueSlider/ValueSlider";
import Button from "@/components/items/Button/Button";
import Sun from "@/assets/images/sun.svg?react";
import { IsItAPhone } from "@/utils";

type Props = {};

const OurValues: React.FC<Props> = () => {
  const isPhone = IsItAPhone();
  return (
    <section id="values" className={styles.container}>
      <h3 className={styles.title}>Nos valeurs</h3>

      <div className={styles.images}>
        <div className={styles.leftSection}>
          {!isPhone && <Sun className={styles.sun} />}
          <figure className={styles.leftImage}>
            <Image src={TentImage} alt="tent" fill={true} />
          </figure>
        </div>
        <div className={styles.rightImages}>
          <figure className={styles.topImage}>
            <Image src={TentImage} alt="tent" fill={true} />
          </figure>
          <figure className={styles.bottomImage}>
            <Image src={TentImage} alt="tent" fill={true} />
          </figure>
        </div>
      </div>

      <ValueSlider style="values" />

      <Button href="" className={styles.button}>
        DÉCOUVRIR LES TENTES
      </Button>
    </section>
  );
};

export default OurValues;
