import React from "react";
import styles from "./TentTeaser.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";
import Sun from "@/assets/images/sun.svg?react";
import Image from "next/image";

type Props = {};

const TentTeaser: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <div>
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

        <div>
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

      <p>
        {`Comment se déroule la création 
de votre solution avec Inouze ?`}
      </p>
    </div>
  );
};

export default TentTeaser;
