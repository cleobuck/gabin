import React, { ReactNode } from "react";
import styles from "./ImageWithCredit.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
  className: string;
  children?: ReactNode;
};

const ImageWithCredit: React.FC<Props> = ({
  src,
  alt,
  className,
  children,
}) => {
  return (
    <figure
      className={`${styles.imageWithCredit} ${className ? className : ""}`}
    >
      <Image src={src} alt={alt} fill={true} />

      {children}

      <span className={styles.credit}> @Organic-Concept</span>
    </figure>
  );
};

export default ImageWithCredit;
