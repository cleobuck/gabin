import React from "react";
import styling from "./Banner.module.scss";
type Props = {};

export default function Banner({}: Props) {
  return (
    <div className={styling.borders}>
      <section className={styling.banner}>
        <div className={styling.text}>
          {"Mariages, Entreprises, Collectivités, Planner".toUpperCase()}
        </div>
      </section>
    </div>
  );
}
