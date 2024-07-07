"use client";

import ListItem from "@/components/blocks/listItem/listItem";
import SecondSlider from "@/components/blocks/second-slider/SecondSlider";
import React, { useState } from "react";

type Props = {};

export default function ListSlider({}: Props) {
  const [listItem, setListItem] = useState({ active: 0, previous: 0 });

  const [direction, setDirection] = useState("right");
  return (
    <SecondSlider
      oneWay
      length={1}
      slide={setListItem}
      setDirection={setDirection}
      noSetHeight
    >
      <ListItem title="La prise de contact" number={1}>
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
      </ListItem>
    </SecondSlider>
  );
}
