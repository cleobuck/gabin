import React from "react";
import styles from "./TwoLargeImages.module.scss";
import Image, { StaticImageData } from "next/image";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";
type ImageData = { src: StaticImageData; alt: string };

type Props = { firstImage: ImageData; secondImage: ImageData };

const TwoLargeImages: React.FC<Props> = ({ firstImage, secondImage }) => {
  return (
    <div className={styles.container}>
      <figure>
        <ImageWithCredit
          className={styles.figure}
          src={firstImage.src}
          alt={firstImage.alt}
        />
      </figure>
      <figure>
        <ImageWithCredit
          className={styles.figure}
          src={secondImage.src}
          alt={secondImage.alt}
        />
      </figure>
    </div>
  );
};

export default TwoLargeImages;
