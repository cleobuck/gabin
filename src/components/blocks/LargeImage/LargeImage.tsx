import React from "react";
import styles from "./LargeImage.module.scss";
import Sun from "@/assets/icons/sun.svg?react";
import Image, { StaticImageData } from "next/image";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";

type Props = {
  image: {
    image: StaticImageData;
    alt: string;
  };
  style: string;
};

const LargeImage: React.FC<Props> = ({ image, style }) => {
  return (
    <ImageWithCredit
      src={image.image}
      alt={image.alt}
      className={styles.container}
    >
      <Sun className={`${styles[style]} ${styles.sun}`} />{" "}
    </ImageWithCredit>
  );
};

export default LargeImage;
