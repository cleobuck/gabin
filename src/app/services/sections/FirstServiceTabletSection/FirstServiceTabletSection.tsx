import React from "react";
import styles from "./FirstServiceTabletSection.module.scss";
import { ServiceData } from "../../Services.types";
import Image from "next/image";

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
          </p>

          <Image
            className={styles.firstImage}
            src={data.tabletImages[0].image}
            alt={data.tabletImages[0].alt}
            height={226}
            width={310}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstServiceTabletSection;
