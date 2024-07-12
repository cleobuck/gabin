import React from "react";
import styles from "./FourthSection.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";

import Image from "next/image";
import Sun from "@/assets/images/sun.svg?react";

type Props = {};

const FourthSection: React.FC<Props> = ({}) => {
  return (
    <div className={styles.imageSection}>
      <figure className={styles.Leftimage}>
        <Image fill={true} src={TentImage} alt="tent" />
      </figure>

      <div className={styles.leftSection}>
        <Sun className={styles.sun} />
        <figure className={styles.Rightimage}>
          <Image fill={true} src={TentImage} alt="tent" />
        </figure>
      </div>
    </div>
  );
};

export default FourthSection;
