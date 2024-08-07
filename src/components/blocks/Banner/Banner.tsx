import React from "react";
import styling from "./Banner.module.scss";
type Props = { style: string };

// https://codepen.io/studiojvla/pen/qVbQqW

export default function Banner({ style }: Props) {
  return (
    <div className={` ${styling[style]} ${styling.borders}`}>
      <section className={styling.banner}>
        <div className={styling.text}>
          {"Mariages, Entreprises, Collectivités, Planner".toUpperCase()}
          {", "}
          {"Mariages, Entreprises, Collectivités, Planner".toUpperCase()} {", "}
          {"Mariages, Entreprises, Collectivités, Planner".toUpperCase()}
        </div>
      </section>
    </div>
  );
}
