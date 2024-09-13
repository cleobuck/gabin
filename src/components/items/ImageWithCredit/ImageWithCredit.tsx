"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./ImageWithCredit.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
  className?: string; // className is optional now
  children?: ReactNode;
};

const ImageWithCredit: React.FC<Props> = ({
  src,
  alt,
  className,
  children,
}) => {
  const [isInView, setIsInView] = useState(false); // State to track if the image is in the viewport
  const imageRef = useRef<HTMLElement | null>(null); // Ref to target the image container

  useEffect(() => {
    if (imageRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true); // Image is in the viewport
              observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the image is visible
      );

      observer.observe(imageRef.current);

      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current); // Cleanup on unmount
        }
      };
    }
  }, [imageRef]);

  return (
    <figure
      ref={imageRef} // Attach ref to the figure element
      className={`${styles.imageWithCredit} ${className ? className : ""}`}
    >
      {/* Conditionally render image when it's in view */}
      <Image
        src={src}
        className={isInView ? styles.isInView : ""}
        alt={alt}
        fill={true}
      />

      {children}

      <span className={styles.credit}>@Organic-Concept</span>
    </figure>
  );
};

export default ImageWithCredit;
