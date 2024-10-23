import React from "react";
import styles from "./CollectivesTabletSection.module.scss";
import { ServiceData } from "../../Services.types";
import Sun from "@/assets/icons/sun.svg?react";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";
type Props = { data: ServiceData };

const CollectivesTabletSection: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topPart}>
        <div className={styles.topLeftPart}>
          <h2> {data.firstParagraph.title}</h2>

          {data.firstParagraph.text.map((para, index) => (
            <p key={index}> {para}</p>
          ))}
        </div>

        <ImageWithCredit
          src={data.tabletImages[0].image}
          alt={data.tabletImages[0].alt}
          className={styles.rightImage}
        >
          {" "}
          <Sun className={styles.sun} />
        </ImageWithCredit>
      </div>

      <div className={styles.bottomPart}>
        <div className={styles.leftPart}>
          <ImageWithCredit
            src={data.tabletImages[0].image}
            alt={data.tabletImages[0].alt}
            className={styles.topImage}
          />

          <ImageWithCredit
            src={data.tabletImages[0].image}
            alt={data.tabletImages[0].alt}
            className={styles.bottomImage}
          />
          <Sun className={styles.sun} />
        </div>

        <div className={styles.rightPart}>
          <ImageWithCredit
            src={data.tabletImages[0].image}
            alt={data.tabletImages[0].alt}
            className={styles.rightImage}
          ></ImageWithCredit>
          <h2> {data.secondParagraph.title} </h2>

          {data.secondParagraph.text.map((para, key) => (
            <p key={key}> {para} </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectivesTabletSection;
