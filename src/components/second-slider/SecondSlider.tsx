"use client";

import React from "react";
import Arrows from "@/assets/images/arrows.svg?react";
import styling from "./SecondSlider.module.scss";

type Props = {};

export default function SecondSlider({ slide, length, children }: Props) {
  return (
    <section className={styling.secondSlider}>
      <h2> Caractéristiques</h2>

      <div
        className={styling.leftArrows}
        onClick={() => {
          slide((active) => (active === 0 ? length - 1 : active - 1));
        }}
      >
        <Arrows />
      </div>
      {children}
      <div
        className={styling.rightArrows}
        onClick={() =>
          slide((active) => (active === length - 1 ? 0 : active + 1))
        }
      >
        <Arrows />
      </div>
    </section>
  );
}
