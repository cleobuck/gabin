"use client";
import React from "react";
import styles from "./OurValues.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";
import Image from "next/image";
import ValueSlider from "@/components/sections/ValueSlider/ValueSlider";
import Button from "@/components/items/Button/Button";
import Sun from "@/assets/images/sun.svg?react";
import { IsItAPhone } from "@/utils";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";

type Props = {};

const OurValues: React.FC<Props> = () => {
  const isPhone = IsItAPhone();
  return (
    <section id="values" className={styles.container}>
      <h3 className={styles.title}>Nos valeurs</h3>

      <div className={styles.images}>
        <div className={styles.leftSection}>
          {!isPhone && <Sun className={styles.sun} />}
          <ImageWithCredit
            src={TentImage}
            alt="tent"
            className={styles.leftImage}
          />
        </div>
        <div className={styles.rightImages}>
          <ImageWithCredit
            src={TentImage}
            alt="tent"
            className={styles.topImage}
          />
          <ImageWithCredit
            src={TentImage}
            alt="tent"
            className={styles.bottomImage}
          />
        </div>
      </div>

      <ValueSlider style="values" />
    </section>
  );
};

export default OurValues;
