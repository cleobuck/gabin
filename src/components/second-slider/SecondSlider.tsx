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
  oneWay = false,
}: Props) {
  return (
    <section className={styling.secondSlider}>
      <h2> Caractéristiques</h2>

      {!oneWay && (
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
      )}

      {children}

      <div className={oneWay ? styling.rightArrowContainer : ""}>
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
        {oneWay && <div className={styling.rightArrowLine}></div>}
      </div>
    </section>
  );
}
