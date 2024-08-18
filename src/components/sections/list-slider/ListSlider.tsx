"use client";

import React, { ReactNode, useRef, useState, useEffect } from "react";
import styling from "./ListSlider.module.scss";
import Arrows from "@/assets/images/arrows.svg?react";

type Props = {
  style: string;
  children: ReactNode;
  positions: number[];
  bothWays?: boolean;
  middleArrows?: boolean;
};

export default function ListSlider({
  style,
  children,
  positions,
  bothWays,
  middleArrows,
}: Props) {
  const [position, setPosition] = useState(bothWays ? 1 : 0);
  const [isPositionResetting, resetPosition] = useState<boolean | string>(
    false
  );
  const [isDebouncing, setIsDebouncing] = useState(false); // New state for debouncing

  const scrollableDiv = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPositionResetting && scrollableDiv.current) {
      const temporaryPosition = bothWays
        ? position === 0
          ? "back to front"
          : position === positions.length
          ? "front to back"
          : false
        : positions.length - 1 === position;

      scrollableDiv.current.scrollTo({
        top: 0,
        left: positions[position],
        behavior: "smooth",
      });

      if (temporaryPosition) {
        resetPosition(temporaryPosition);
      }
    }
  }, [position, positions.length]);

  useEffect(() => {
    if (isPositionResetting && scrollableDiv.current) {
      const scrollTimeOut = setTimeout(() => {
        scrollableDiv.current!.scrollLeft =
          isPositionResetting === "back to front"
            ? positions[positions.length - 2]
            : isPositionResetting === "front to back"
            ? positions[1]
            : 0;

        setPosition(
          isPositionResetting === "back to front"
            ? positions.length - 2
            : isPositionResetting === "front to back"
            ? 1
            : 0
        );
        resetPosition(false); // Reset the flag
      }, 300);

      return () => clearTimeout(scrollTimeOut);
    }
  }, [isPositionResetting]);

  const handleArrowClick = (direction: "forwards" | "backwards") => {
    if (isDebouncing) return; // If already debouncing, ignore the click

    setIsDebouncing(true);

    setPosition((pos) => (direction === "forwards" ? pos + 1 : pos - 1));

    setTimeout(() => {
      setIsDebouncing(false); // Allow subsequent clicks after debounce delay
    }, 300); // Adjust the debounce delay as needed
  };

  return (
    <div
      ref={sliderRef}
      className={`${styling.listSlider} ${styling[style]} ${
        middleArrows ? styling.middleArrowsSlider : ""
      }`}
    >
      <div className={styling.listScrollable} ref={scrollableDiv}>
        <div
          className={styling.overflownContent}
          onScroll={(e) => e.preventDefault()}
        >
          {children}
        </div>
      </div>
      <div
        className={`${
          middleArrows ? styling.middleArrowsContainer : styling.arrowsContainer
        }`}
      >
        {bothWays && (
          <div
            className={`${styling.arrows} ${styling.leftArrows}`}
            onClick={() => {
              handleArrowClick("backwards");
            }}
          >
            <Arrows className={styling[style]} />
          </div>
        )}
        <div
          className={`${styling.arrows} ${styling.rightArrows}`}
          onClick={() => {
            handleArrowClick("forwards");
          }}
        >
          <Arrows className={styling[style]} />
        </div>
        <div className={styling.rightArrowLine} />
      </div>
    </div>
  );
}
