"use client";

import React from "react";
import Arrows from "@/assets/images/arrows.svg?react";
import styling from "./SecondSlider.module.scss";

type Props = {};

export default function SecondSlider({
  slide,
  length,
  children,
  setDirection,
}: Props) {
  return (
    <section className={styling.secondSlider}>
      <h2> Caractéristiques</h2>

      <div
        className={styling.leftArrows}
        onClick={() => {
          slide((prev) => ({
            active: prev.active === 0 ? length - 1 : prev.active - 1,
            previous: prev.active,
          }));
          setDirection("left");
        }}
      >
        <Arrows />
      </div>
      {children}
      <div
        className={styling.rightArrows}
        onClick={() => {
          slide((prev) => ({
            active: prev.active === length - 1 ? 0 : prev.active + 1,
            previous: prev.active,
          }));
          setDirection("right");
        }}
      >
        <Arrows />
      </div>
    </section>
  );
}
