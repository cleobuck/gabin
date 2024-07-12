import React from "react";
import styles from "./FirstSection.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";
import Image from "next/image";
import DevisButton from "@/components/items/Button/DevisButton";
import BulletPoint from "@/assets/images/bullet-point.svg?react";

type Props = { type: string; data };

const FirstSection: React.FC<Props> = ({ type, data }) => {
  return (
    <div className={styles.container}>
      <h2> NOS TENTES </h2>
      <h3>
        <BulletPoint className={styles.bulletPoint} />
        {type === "stretch" ? "la Stretch" : "la Silhouette"}
      </h3>
      <figure className={styles.image}>
        <Image
          src={type === "stretch" ? TentImage : TentImage}
          alt="tent"
          fill={true}
        />
      </figure>

      <DevisButton className={styles.devisButton} />

      <h4>{data.title} </h4>

      <section className={styles.description}> {data.description} </section>
    </div>
  );
};

export default FirstSection;
