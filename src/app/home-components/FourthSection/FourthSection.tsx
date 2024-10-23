import React from "react";
import styles from "./FourthSection.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";

import Image from "next/image";
import Sun from "@/assets/icons/sun.svg?react";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";

type Props = {};

const FourthSection: React.FC<Props> = ({}) => {
  return (
    <div className={styles.imageSection}>
      <ImageWithCredit
        className={styles.Leftimage}
        src={TentImage}
        alt="tent"
      />

      <div className={styles.leftSection}>
        <Sun className={styles.sun} />
        <ImageWithCredit
          src={TentImage}
          alt="tent"
          className={styles.Rightimage}
        />
      </div>
    </div>
  );
};

export default FourthSection;
