import React from "react";
import styles from "./StepsSlider.module.scss";
import ListSlider from "@/components/sections/list-slider/ListSlider";
import ListItem from "@/components/blocks/listItem/listItem";

type Props = { style: string };

const StepsSlider: React.FC<Props> = ({ style }) => {
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
    <ListSlider style={style}>
      {sliderData.map((elem: any, index: number) => (
        <Article key={index} elem={elem} />
      ))}
    </ListSlider>
  );
};

export default StepsSlider;

type ArticleProps = {
  elem: any;
};

const Article = ({ elem }: ArticleProps) => {
  return (
    <ListItem
      className={` ${styles.sliderElem}`}
      title={elem.title}
      number={elem.number}
    >
      {elem.text}
    </ListItem>
  );
};
