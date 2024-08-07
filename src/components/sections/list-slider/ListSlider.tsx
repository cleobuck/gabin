"use client";

import React, { ReactNode, useRef, useState } from "react";

import styling from "./ListSlider.module.scss";
import { IsItAPhone } from "@/utils";
import { useEffect } from "react";
type Props = { style: string; children: ReactNode };
import Arrows from "@/assets/images/arrows.svg?react";

export default function ListSlider({ style, children }: Props) {
  const [position, setPosition] = useState(0);
  const isPhone = IsItAPhone();
  const scrollableDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollableDiv.current!.scrollTo({
      top: 0,
      left: position,
      behavior: "smooth",
    });
  }, [position]);

  return (
    <div className={`${styling.listSlider} ${styling[style]}`}>
      <div className={styling.listScrollable} ref={scrollableDiv}>
        <div
          className={styling.overflownContent}
          onScroll={(e) => e.preventDefault()}
        >
          {children}
        </div>
      </div>
      <div className={styling.rightArrowContainer}>
        <div
          className={styling.rightArrows}
          onClick={() => {
            setPosition((position) => {
              if (
                position + window.innerWidth ===
                scrollableDiv.current!.scrollWidth
              ) {
                return 0;
              } else {
                return position + window.innerWidth;
              }
            });
          }}
        >
          <Arrows />
        </div>
        <div className={styling.rightArrowLine} />
      </div>
    </div>
  );
}
