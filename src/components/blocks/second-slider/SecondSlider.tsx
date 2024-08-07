"use client";

import React, { ReactNode } from "react";
import Arrows from "@/assets/images/arrows.svg?react";
import styling from "./SecondSlider.module.scss";

type Props = {
  slide: (
    callback: (value: { previous: number; active: number }) => {
      previous: number;
      active: number;
    }
  ) => void;
  length: number;
  setDirection?: (value: string) => void;
  title?: string;
  height?: number;
  children: ReactNode;
  style: string;
  className?: string;
};

export default function SecondSlider({
  slide,
  length,
  children,
  setDirection,
  title,
  height,
  style,
  className,
}: Props) {
  return (
    <section
      className={`${styling.secondSlider} ${!height ? "" : styling.setHeight} ${
        styling[style]
      }  ${className ? className : ""}`}
      style={{ height: height || 250 }}
    >
      {title && <h2> {title}</h2>}

      <div
        className={styling.leftArrows}
        onClick={() => {
          slide((prev) => ({
            active: prev.active === 0 ? length - 1 : prev.active - 1,
            previous: prev.active,
          }));

          if (setDirection) {
            setDirection("left");
          }
        }}
      >
        <Arrows />
      </div>

      {children}

      <div>
        <div
          className={styling.rightArrows}
          onClick={() => {
            slide((prev) => ({
              active: prev.active === length - 1 ? 0 : prev.active + 1,
              previous: prev.active,
            }));

            if (setDirection) {
              setDirection("right");
            }
          }}
        >
          <Arrows />
        </div>
      </div>
    </section>
  );
}
