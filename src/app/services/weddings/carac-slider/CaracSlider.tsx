"use client";

import React, { useEffect, useState } from "react";
import SecondSlider from "@/components/second-slider/SecondSlider";
import imageTest2 from "@/assets/images/linkedin.svg?react";

import ImageTest1 from "@/assets/images/sun.svg?react";

import Drops from "@/assets/images/drops.svg?react";
import styling from "./CaracSlider.module.scss";
type Props = {};

export default function CaracSlider({}: Props) {
  const sliderData = [
    { title: "imperméable", Icon: Drops },
    { title: "imperméable", Icon: imageTest2 },
    { title: "imperméable", Icon: ImageTest1 },
  ];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <SecondSlider slide={setActiveImage} length={sliderData.length}>
      {sliderData.map((elem, index) => (
        <article
          key={index}
          className={`${
            activeImage === index
              ? styling.active
              : index > activeImage
              ? styling.afterActive
              : styling.beforeActive
          } ${styling.sliderElem}`}
        >
          <elem.Icon className={styling.icon} />
          <h3> {elem.title}</h3>
        </article>
      ))}
    </SecondSlider>
  );
}
