import React from "react";
import styles from "./LargeImage.module.scss";
import Sun from "@/assets/images/sun.svg?react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: {
    image: StaticImageData;
    alt: string;
  };
  style: string;
};

const LargeImage: React.FC<Props> = ({ image, style }) => {
  return (
    <div className={styles.container}>
      <Image src={image.image} alt={image.alt} fill={true} />

      <Sun className={`${styles[style]} ${styles.sun}`} />
    </div>
  );
};

export default LargeImage;
