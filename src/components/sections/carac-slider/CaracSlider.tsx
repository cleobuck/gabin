"use client";

import React, { ReactNode, useEffect, useState } from "react";
import SecondSlider from "@/components/blocks/second-slider/SecondSlider";

import styling from "./CaracSlider.module.scss";
import { createClassNameString } from "@/utils";
import Text from "@/components/blocks/Text/Text";
type Props = {
  style: string;
  sliderData: { title: string; Icon: ReactNode }[];
};

export default function CaracSlider({ style, sliderData }: Props) {
  const [imageData, setImageData] = useState({ active: 0, previous: 0 });

  const [direction, setDirection] = useState("right");

  return (
    <div className={`${styling.caracSlider} ${styling[style]}`}>
      <Text className={styling.text}>
        <p>
          Fortes de leur identité propre, nos tentes offrent toutes deux
          flexibilité et liberté dans l’installation et la réalisation de votre
          projet.
        </p>
        <p>
          À l’écoute, nous saurons vous conseiller sur la solution la plus
          adaptée tout en se laissant guider par votre imagination pour aménager
          la structure de vos rêves.
        </p>
      </Text>

      <div className={styling.sliderWrapper}>
        <h2>Caractéristiques </h2>
        <h3> {sliderData[imageData.active].title}</h3>

        <SecondSlider
          slide={setImageData}
          setDirection={setDirection}
          length={sliderData.length}
          style={style}
          className={styling.sliderDiv}
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
      </div>
    </div>
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
    </article>
  );
};
