import React from "react";
import styles from "./ThirdTabletSection.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";
import Image from "next/image";
import Sun from "@/assets/images/sun.svg?react";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";

type Props = {};

const ThirdTabletSection: React.FC<Props> = ({}) => {
  return (
    <div aria-display="hidden" className={styles.container}>
      <div className={styles.leftSection}>
        <ImageWithCredit src={TentImage} className={styles.topImage} alt="" />

        <div className={styles.bottomSection}>
          <Sun className={styles.sun} />
          <ImageWithCredit
            src={TentImage}
            className={styles.bottomImage}
            alt=""
          />
        </div>
      </div>

      <div className={styles.rightSection}>
        <p>
          Quel que soit votre événement, nos structures haut de gamme apportent
          une atmosphère unique et élégante à votre lieu.
        </p>

        <p>
          Quel que soit votre événement, nos structures haut de gamme apportent
          une atmosphère unique et élégante à votre lieu.
        </p>
        <ImageWithCredit src={TentImage} className={styles.textImage} alt="" />
      </div>
    </div>
  );
};

export default ThirdTabletSection;
