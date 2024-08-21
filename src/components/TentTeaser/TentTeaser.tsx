import React from "react";
import styles from "./TentTeaser.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";
import Sun from "@/assets/images/sun.svg?react";
import Image from "next/image";

type Props = { style: string };

const TentTeaser: React.FC<Props> = ({ style }) => {
  return (
    <div className={`${styles.container} ${styles[style]}`}>
      <div className={styles.imagesContainer}>
        <div className={styles.firstImage}>
          <figure>
            <Image
              alt="tente"
              className={styles.image}
              fill={true}
              src={TentImage}
            />
          </figure>
          <figcaption> stretch tent </figcaption>
        </div>

        <div className={styles.secondImage}>
          <figure>
            <Image
              alt="tente"
              className={styles.image}
              fill={true}
              src={TentImage}
            />
          </figure>
          <figcaption> silhouette </figcaption>
        </div>
      </div>

      <Sun className={styles.sun} />

      <p className={styles.question}>
        {`Comment se déroule la création 
de votre solution avec Inouze ?`}
      </p>
    </div>
  );
};

export default TentTeaser;
