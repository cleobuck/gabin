"use client";

import React, { ReactNode, useRef, useState } from "react";

import styling from "./ListSlider.module.scss";
import { useEffect } from "react";
type Props = { style: string; children: ReactNode };
import Arrows from "@/assets/images/arrows.svg?react";

export default function ListSlider({
  style,
  children,
  arrowStyle = "bottom",
}: Props) {
  const [position, setPosition] = useState(0);
  const scrollableDiv = useRef<HTMLDivElement>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollableDiv.current!.scrollTo({
      top: 0,
      left: position,
      behavior: "smooth",
    });
  }, [position]);

  return (
    <div ref={sliderRef} className={`${styling.listSlider} ${styling[style]}`}>
      <div className={styling.listScrollable} ref={scrollableDiv}>
        <div
          className={styling.overflownContent}
          onScroll={(e) => e.preventDefault()}
        >
          {children}
        </div>
      </div>
      <div className={styling.arrowsContainer}>
        {position !== 0 && sliderRef && (
          <div
            className={`${styling.arrows} ${styling.leftArrows}`}
            onClick={() => {
              setPosition(
                (position) => position - sliderRef.current!.offsetWidth
              );
            }}
          >
            <Arrows className={styling[style]} />
          </div>
        )}
        {scrollableDiv?.current &&
          position + sliderRef.current!.offsetWidth <
            scrollableDiv.current!.scrollWidth && (
            <div
              className={`${styling.arrows} ${styling.rightArrows}`}
              onClick={() => {
                setPosition(
                  (position) => position + sliderRef.current!.offsetWidth
                );
              }}
            >
              <Arrows className={styling[style]} />
            </div>
          )}
        <div className={styling.rightArrowLine} />
      </div>
    </div>
  );
}
