"use client";

import React, { ReactElement, forwardRef, useRef, useState } from "react";
import SecondSlider from "@/components/blocks/second-slider/SecondSlider";

import styling from "./ListSlider.module.scss";
import { IsItAPhone, createClassNameString } from "@/utils";
import ListItem from "@/components/blocks/listItem/listItem";
import { useEffect } from "react";
type Props = { style: string };

export default function ListSlider({ style }: Props) {
  const isPhone = IsItAPhone();
  const sliderData = [
    {
      number: 1,
      title: "La prise de contact : ",
      text: (
        <>
          <p>
            l’histoire commence avec votre projet ! En demandant un devis, vous
            avez la possibilité de nous indiquer tous les éléments que vous avez
            en tête pour votre grand jour. Nombre de convives, lieu,
            configuration, ambiance…
          </p>
          <p>
            Soyez le plus précis possible, cela nous aidera pour imaginer la
            meilleure solution pour vous !
          </p>
        </>
      ),
    },
    {
      number: 2,
      title: "Le premier échange",
      text: (
        <>
          <p>
            c’est à nous de vous contacter, et nous nous engageons à le faire
            dans les 48h après votre demande d’informations.
          </p>
          <p>
            Nous pourrons ainsi échanger plus en détail de la façon dont vous
            imaginez cet espace.
          </p>
        </>
      ),
    },
    {
      number: 3,
      title: "La prise de contact : ",
      text: (
        <>
          <p>
            l’histoire commence avec votre projet ! En demandant un devis, vous
            avez la possibilité de nous indiquer tous les éléments que vous avez
            en tête pour votre grand jour. Nombre de convives, lieu,
            configuration, ambiance…
          </p>
          <p>
            Soyez le plus précis possible, cela nous aidera pour imaginer la
            meilleure solution pour vous !
          </p>
        </>
      ),
    },
    {
      number: 4,
      title: "Le premier échange",
      text: (
        <>
          <p>
            c’est à nous de vous contacter, et nous nous engageons à le faire
            dans les 48h après votre demande d’informations.
          </p>
          <p>
            Nous pourrons ainsi échanger plus en détail de la façon dont vous
            imaginez cet espace.
          </p>
        </>
      ),
    },
  ];

  const desktopArray = [];

  for (let i = 0; i < sliderData.length; i += 2) {
    desktopArray.push([sliderData[i], sliderData[i + 1]]);
  }

  const [elemData, setElemData] = useState({ active: 0, previous: 0 });

  const [direction, setDirection] = useState("right");

  const refs = useRef<(HTMLElement | null)[]>([]);

  const setRef = (index: number) => (element: HTMLElement | HTMLDivElement) => {
    refs.current[index] = element;
  };

  console.log(refs.current.map((ref) => ref?.clientHeight || 0));

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (refs.current.length > 0) {
      setHeight(Math.max(...refs.current.map((ref) => ref?.clientHeight || 0)));
    }
  }, [refs.current.length]);

  return (
    <SecondSlider
      slide={setElemData}
      setDirection={setDirection}
      length={isPhone ? sliderData.length : desktopArray.length}
      oneWay
      height={height}
      style={style}
    >
      {isPhone
        ? sliderData.map((elem, index) => (
            <Article
              ref={setRef(index)}
              key={index}
              elem={elem}
              index={index}
              direction={direction}
              elemData={elemData}
            />
          ))
        : desktopArray.map((elem, index) => (
            <DesktopPair
              pair={elem}
              key={index}
              direction={direction}
              index={index}
              elemData={elemData}
              ref={setRef(index)}
            />
          ))}
    </SecondSlider>
  );
}

type ArticleProps = {
  elemData: { active: number; previous: number };
  elem: any;
  index: number;
  direction: string;
};

type DesktopArticleProps = {
  elemData: { active: number; previous: number };
  pair: any;
  index: number;
  direction: string;
};

const DesktopPair = forwardRef<HTMLDivElement, DesktopArticleProps>(
  ({ pair, direction, elemData, index }, ref) => {
    const classNames = [
      {
        condition:
          elemData.active === index && elemData.active !== elemData.previous,
        name: styling[`active${direction}`],
      },
      {
        condition:
          elemData.previous === index && elemData.previous !== elemData.active,
        name: styling[`prev${direction}`],
      },
      {
        condition: elemData.previous === elemData.active && index === 0,
        name: styling.initialActive,
      },
    ];

    return (
      <div
        ref={ref}
        className={`  ${styling.sliderElem} ${createClassNameString(
          classNames
        )} ${styling.pair}`}
      >
        {pair.map((elem: any, subIndex: number) => (
          <ListItem key={subIndex} title={elem.title} number={elem.number}>
            {elem.text}
          </ListItem>
        ))}
      </div>
    );
  }
);

const Article = forwardRef<HTMLElement, ArticleProps>(
  ({ elemData, elem, index, direction }, ref) => {
    const classNames = [
      {
        condition:
          elemData.active === index && elemData.active !== elemData.previous,
        name: styling[`active${direction}`],
      },
      {
        condition:
          elemData.previous === index && elemData.previous !== elemData.active,
        name: styling[`prev${direction}`],
      },
      {
        condition: elemData.previous === elemData.active && index === 0,
        name: styling.initialActive,
      },
    ];

    return (
      <ListItem
        ref={ref}
        className={` ${styling.sliderElem} ${createClassNameString(
          classNames
        )}`}
        title={elem.title}
        number={elem.number}
      >
        {elem.text}
      </ListItem>
    );
  }
);

Article.displayName = "Article";
