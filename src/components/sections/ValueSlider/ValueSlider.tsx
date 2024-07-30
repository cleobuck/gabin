"use client";
import React from "react";
import styles from "./ValueSlider.module.scss";
import DraggableSlider from "@/components/blocks/Slider/Slider";
import { IsItAPhone } from "@/utils";
import VerticalSlider from "@/components/blocks/VerticalSlider/VerticalSlider";

type Props = { style: string };

const ValueSlider: React.FC<Props> = ({ style }) => {
  const isPhone = IsItAPhone();
  return isPhone ? (
    <DraggableSlider
      style="home"
      type="nodes"
      elements={[
        <FirstElement style={style} key={1} />,
        <SecondElement style={style} key={2} />,
        <ThirdElement style={style} key={3} />,
      ]}
    />
  ) : (
    <VerticalSlider
      elements={[
        <FirstElement style={style} key={1} />,
        <SecondElement style={style} key={2} />,
        <ThirdElement style={style} key={3} />,
      ]}
    />
  );
};

const FirstElement = ({ style }: { style: string }) => {
  return (
    <article className={`${styles.article} ${styles[style]}`}>
      <h3> 1. Service</h3>

      <p>
        Le sens du service fait partie de notre ADN, nous vous accompagnons à
        toutes les étapes :  de la création de la structure idéale pour votre
        événement jusqu’à l’installation.{" "}
      </p>
    </article>
  );
};

const SecondElement = ({ style }: { style: string }) => {
  return (
    <article className={`${styles.article} ${styles[style]}`}>
      <h3> 2. Humain</h3>

      <p>
        Chaque collaboration commence par une rencontre, une histoire. Avec
        Inouze, nous avons à cœur de sublimer chacun de vos projets en apportant
        notre savoir-faire et en restant à l’écoute de vos besoins.
      </p>
    </article>
  );
};

const ThirdElement = ({ style }: { style: string }) => {
  return (
    <article className={`${styles.article} ${styles[style]}`}>
      <h3> 3. Ecoresponsabilité</h3>

      <p>
        Chaque collaboration commence par une rencontre, une histoire. Avec
        Inouze, nous avons à cœur de sublimer chacun de vos projets en apportant
        notre savoir-faire et en restant à l’écoute de vos besoins.
      </p>
    </article>
  );
};

export default ValueSlider;
