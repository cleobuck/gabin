import React from "react";
import styles from "./BusinessTabletSection.module.scss";
import { ServiceData } from "../../Services.types";
import Sun from "@/assets/images/sun.svg?react";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";

type Props = { data: ServiceData };

const BusinessTabletSection: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.leftPart}>
          <h2> {data.firstParagraph.title}</h2>
          {data.firstParagraph.text.map((paragraph, key) => (
            <p key={key}> {paragraph} </p>
          ))}
        </div>

        <ImageWithCredit
          src={data.tabletImages[0].image}
          alt={data.tabletImages[0].alt}
          className={styles.firstImage}
        />
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.leftImages}>
          <Sun className={styles.sun} />
          <ImageWithCredit
            className={styles.thirdImage}
            src={data.tabletImages[1].image}
            alt={data.tabletImages[1].alt}
          />

          <ImageWithCredit
            src={data.tabletImages[2].image}
            alt={data.tabletImages[2].alt}
            className={styles.fourthImage}
          />
        </div>

        <div className={styles.rightText}>
          <Sun className={styles.sun} />

          <h2>{data.secondParagraph.title}</h2>

          {data.secondParagraph.text.map((paragraph, key) => (
            <p key={key}> {paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessTabletSection;
