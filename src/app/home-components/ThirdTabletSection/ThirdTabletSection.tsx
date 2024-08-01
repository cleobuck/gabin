import React from "react";
import styles from "./ThirdTabletSection.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";
import Image from "next/image";
import Sun from "@/assets/images/sun.svg?react";

type Props = {};

const ThirdTabletSection: React.FC<Props> = ({}) => {
  return (
    <div aria-display="hidden" className={styles.container}>
      <div className={styles.leftSection}>
        <figure className={styles.topImage}>
          <Image src={TentImage} fill={true} alt="" />
        </figure>

        <div className={styles.bottomSection}>
          <Sun className={styles.sun} />
          <figure className={styles.bottomImage}>
            <Image src={TentImage} fill={true} alt="" />
          </figure>
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
        <figure className={styles.textImage}>
          <Image src={TentImage} fill={true} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ThirdTabletSection;
