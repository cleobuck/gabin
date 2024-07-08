"use client";

import React, {
  forwardRef,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import SecondSlider from "@/components/blocks/second-slider/SecondSlider";

import styling from "./ListSlider.module.scss";
import { createClassNameString } from "@/utils";
import ListItem from "@/components/blocks/listItem/listItem";
type Props = {};

export default function ListSlider({}: Props) {
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
      title: "La prise de contacteeee : ",
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
  ];

  const [elemData, setElemData] = useState({ active: 0, previous: 0 });

  const [direction, setDirection] = useState("right");

  const articleRef = useRef<HTMLElement>(null);

  return (
    <SecondSlider
      slide={setElemData}
      setDirection={setDirection}
      length={sliderData.length}
      oneWay
      height={articleRef.current ? articleRef.current.clientHeight : undefined}
    >
      {sliderData.map((elem, index) => (
        <Article
          ref={articleRef}
          key={index}
          elem={elem}
          index={index}
          direction={direction}
          elemData={elemData}
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
        ref={elemData.active == index ? ref : undefined}
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
