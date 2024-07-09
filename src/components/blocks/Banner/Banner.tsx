import React from "react";
import styling from "./Banner.module.scss";
type Props = { style: string };

export default function Banner({ style }: Props) {
  return (
    <div className={`${styling[style]} ${styling.borders}`}>
      <section className={styling.banner}>
        <div className={styling.text}>
          {"Mariages, Entreprises, Collectivités, Planner".toUpperCase()}
        </div>
      </section>
    </div>
  );
}
