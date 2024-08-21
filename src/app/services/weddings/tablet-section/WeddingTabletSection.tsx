import React from "react";
import styles from "./WeddingTabletSection.module.scss";
import { ServiceData } from "../../Services.types";
import Image from "next/image";
import Sun from "@/assets/images/sun.svg?react";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";

type Props = { data: ServiceData };

const WeddingTabletSection: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.firstPart}>
        <h2>{data.firstParagraph.title}</h2>
        <p className={styles.firstParagraph}> {data.firstParagraph.text[0]}</p>
        <div className={styles.floatedElements}>
          <div className={styles.secondParagraph}>
            {data.firstParagraph.text[1]}

            <div className={styles.leftImages}>
              <ImageWithCredit
                src={data.tabletImages[1].image}
                alt={data.tabletImages[1].alt}
                className={styles.firstLeftImage}
              >
                <Sun className={styles.sun} />{" "}
              </ImageWithCredit>

              <ImageWithCredit
                src={data.tabletImages[2].image}
                alt={data.tabletImages[2].alt}
                className={styles.secondLeftImage}
              />
            </div>
          </div>

          <div className={styles.rightBlock}>
            <ImageWithCredit
              src={data.tabletImages[0].image}
              alt={data.tabletImages[0].alt}
              className={styles.firstImage}
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

export default WeddingTabletSection;
