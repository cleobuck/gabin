import React from "react";
import styles from "./FirstServiceTabletSection.module.scss";
import { ServiceData } from "../../Services.types";
import Image from "next/image";
import Sun from "@/assets/images/sun.svg?react";

type Props = { style: string; data: ServiceData };

const FirstServiceTabletSection: React.FC<Props> = ({ style, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.firstPart}>
        <h2>{data.firstParagraph.title}</h2>
        <p className={styles.firstParagraph}> {data.firstParagraph.text[0]}</p>
        <div className={styles.floatedElements}>
          <p className={styles.secondParagraph}>
            {data.firstParagraph.text[1]}

            <figure className={styles.firstLeftImage}>
              <Image
                src={data.tabletImages[1].image}
                alt={data.tabletImages[1].alt}
                fill={true}
              />
              <Sun className={styles.sun} />
            </figure>

            <figure className={styles.secondLeftImage}>
              <Image
                src={data.tabletImages[2].image}
                alt={data.tabletImages[2].alt}
                fill={true}
              />
            </figure>
          </p>

          <div className={styles.rightBlock}>
            <Image
              className={styles.firstImage}
              src={data.tabletImages[0].image}
              alt={data.tabletImages[0].alt}
              height={226}
              width={310}
            />

            <h2> {data.secondParagraph.title} </h2>

            {data.secondParagraph.text.map((paragraph, index) => (
              <p key={index}> {paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstServiceTabletSection;
