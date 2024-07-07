"use client";

import React, { useEffect, useState } from "react";
import SecondSlider from "@/components/second-slider/SecondSlider";
import imageTest2 from "@/assets/images/linkedin.svg?react";

import ImageTest1 from "@/assets/images/sun.svg?react";

import Drops from "@/assets/images/drops.svg?react";
import styling from "./CaracSlider.module.scss";
import { createClassNameString } from "@/utils";
type Props = {};

//https://stackoverflow.com/questions/76614923/how-to-pass-a-component-as-a-prop-using-next-13

export default function CaracSlider({}: Props) {
  const sliderData = [
    { title: "imperméable", Icon: Drops },
    { title: "deuxieme", Icon: imageTest2 },
    { title: "troisieme", Icon: ImageTest1 },
  ];

  const [imageData, setImageData] = useState({ active: 0, previous: 0 });

  const [direction, setDirection] = useState("right");

  return (
    <SecondSlider
      slide={setImageData}
      setDirection={setDirection}
      length={sliderData.length}
      oneWay
    >
      {sliderData.map((elem, index) => (
        <Article
          key={index}
          imageData={imageData}
          elem={elem}
          index={index}
          direction={direction}
        />
      ))}
    </SecondSlider>
  );
}

const Article = ({ imageData, elem, index, direction }) => {
  const classNames = [
    {
      condition:
        imageData.active === index && imageData.active !== imageData.previous,
      name: styling[`active${direction}`],
    },

    {
      condition:
        imageData.previous === index && imageData.previous !== imageData.active,
      name: styling[`prev${direction}`],
    },
    {
      condition: imageData.previous === imageData.active && index === 0,
      name: styling.initialActive,
    },
  ];
  return (
    <article
      key={index}
      className={` ${styling.sliderElem} ${createClassNameString(classNames)}`}
    >
      <elem.Icon className={styling.icon} />
      <h3> {elem.title}</h3>
    </article>
  );
};
