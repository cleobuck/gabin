import React from "react";
import styles from "./HomeSlider.module.scss";
import DraggableSlider from "@/components/blocks/Slider/Slider";

type Props = {};

const HomeSlider: React.FC<Props> = ({}) => {
  return (
    <DraggableSlider
      type="nodes"
      elements={[<FirstElement />, <SecondElement />]}
    />
  );
};

const FirstElement = () => {
  return (
    <article>
      <h3> 1. Service</h3>

      <p>
        Le sens du service fait partie de notre ADN, nous vous accompagnons à
        toutes les étapes :  de la création de la structure idéale pour votre
        événement jusqu’à l’installation.{" "}
      </p>
    </article>
  );
};

const SecondElement = () => {
  return (
    <article>
      <h3> 2. Humain</h3>

      <p>
        Chaque collaboration commence par une rencontre, une histoire. Avec
        Inouze, nous avons à cœur de sublimer chacun de vos projets en apportant
        notre savoir-faire et en restant à l’écoute de vos besoins.
      </p>
    </article>
  );
};

export default HomeSlider;
