"use client";

import React, { ReactElement, forwardRef, useRef, useState } from "react";
import SecondSlider from "@/components/blocks/second-slider/SecondSlider";

import styling from "./ListSlider.module.scss";
import { IsItAPhone, createClassNameString } from "@/utils";
import ListItem from "@/components/blocks/listItem/listItem";
import { useEffect } from "react";
type Props = { style: string };
import Arrows from "@/assets/images/arrows.svg?react";

export default function ListSlider({ style }: Props) {
  const [position, setPosition] = useState(0);
  const isPhone = IsItAPhone();
  const scrollableDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollableDiv.current!.scrollTo({
      top: 0,
      left: position,
      behavior: "smooth",
    });
  }, [position]);
  const sliderData = [
    {
      number: 1,
      title: "La prise de contact ",
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
      title: "La prise de contact ",
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

  return (
    <div className={`${styling.listSlider} ${styling[style]}`}>
      <div className={styling.listScrollable} ref={scrollableDiv}>
        <div
          className={styling.overflownContent}
          onScroll={(e) => e.preventDefault()}
        >
          {sliderData.map((elem, index) => (
            <Article key={index} elem={elem} index={index} />
          ))}
        </div>
      </div>
      <div className={styling.rightArrowContainer}>
        <div
          className={styling.rightArrows}
          onClick={() => {
            console.log("width of window", window.innerWidth);
            console.log("width of div", scrollableDiv.current!.scrollWidth);
            console.log("position", position);
            setPosition((position) => {
              if (
                position + window.innerWidth ===
                scrollableDiv.current!.scrollWidth
              ) {
                return 0;
              } else {
                return position + window.innerWidth;
              }
            });
          }}
        >
          <Arrows />
        </div>
        <div className={styling.rightArrowLine} />
      </div>
    </div>
  );
}

type ArticleProps = {
  elem: any;
  index: number;
};

const Article = ({ elem, index }: ArticleProps) => {
  // const classNames = [];

  return (
    <ListItem
      className={` ${styling.sliderElem}`}
      title={elem.title}
      number={elem.number}
    >
      {elem.text}
    </ListItem>
  );
};

Article.displayName = "Article";
