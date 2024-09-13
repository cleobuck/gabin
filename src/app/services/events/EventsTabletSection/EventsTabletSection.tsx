import React from "react";
import styles from "./EventsTabletSection.module.scss";
import { ServiceData } from "../../Services.types";
import Sun from "@/assets/images/sun.svg?react";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";
type Props = { data: ServiceData };

const EventsTabletSection: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topPart}>
        <div className={styles.leftPart}>
          <h2>{data.firstParagraph.title} </h2>

          <Sun className={styles.sun} />
          {data.firstParagraph.text.map((para, index) => (
            <p key={index}> {para}</p>
          ))}
          <ImageWithCredit
            className={styles.leftTopImage}
            src={data.tabletImages[1].image}
            alt={data.tabletImages[1].alt}
          />
        </div>
        <div className={styles.rightPart}>
          <ImageWithCredit
            src={data.tabletImages[0].image}
            alt={data.tabletImages[0].alt}
            className={styles.topImage}
          />
        </div>
      </div>

      <div className={styles.bottomPart}>
        <div className={styles.leftPart}>
          <ImageWithCredit
            className={styles.leftTopImage}
            src={data.tabletImages[1].image}
            alt={data.tabletImages[1].alt}
          />
          <ImageWithCredit
            src={data.tabletImages[2].image}
            alt={data.tabletImages[2].alt}
            className={styles.leftBottomImage}
          />
        </div>

        <div className={styles.rightPart}>
          <h2> {data.secondParagraph.title} </h2>
          {data.secondParagraph.text.map((para, index) => (
            <p key={index}> {para}</p>
          ))}

          <Sun className={styles.sun} />
        </div>
      </div>
    </div>
  );
};

export default EventsTabletSection;
