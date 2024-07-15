"use client";

import React, { ReactNode, useEffect, useState } from "react";
import SecondSlider from "@/components/blocks/second-slider/SecondSlider";

import styling from "./CaracSlider.module.scss";
import { createClassNameString } from "@/utils";
type Props = {
  style: string;
  sliderData: { title: string; Icon: ReactNode }[];
};

//https://stackoverflow.com/questions/76614923/how-to-pass-a-component-as-a-prop-using-next-13

export default function CaracSlider({ style, sliderData }: Props) {
  const [imageData, setImageData] = useState({ active: 0, previous: 0 });

  const [direction, setDirection] = useState("right");

  return (
    <SecondSlider
      slide={setImageData}
      setDirection={setDirection}
      length={sliderData.length}
      title="Caractéristiques"
      style={style}
    >
      {sliderData.map((elem, index) => (
        <Article
          key={index}
          imageData={imageData}
          elem={elem}
          index={index}
          direction={direction}
          style={style}
        />
      ))}
    </SecondSlider>
  );
}

const Article = ({
  imageData,
  elem,
  index,
  direction,
  style,
}: {
  imageData: { active: number; previous: number };
  elem: any;
  index: number;
  direction: string;
  style: string;
}) => {
  const classNames = [
    {
      condition:
        imageData.active === index && imageData.active !== imageData.previous,
      name: styling[`active${direction}`],
    },

    { condition: !!style, name: styling[style] },

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
      {elem.Icon}
      {/* <elem.Icon className={styling.icon} /> */}
      <h3> {elem.title}</h3>
    </article>
  );
};
