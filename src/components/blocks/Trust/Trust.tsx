"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import styling from "./Trust.module.scss";
import Logo from "@/assets/images/logo.svg?react";
import { IsItAPhone } from "@/utils";
import ListSlider from "@/components/sections/list-slider/ListSlider";

type Props = { style: string };

export default function Trust({ style }: Props) {
  const isPhone = IsItAPhone();

  const ref = useRef<HTMLDivElement[]>([]);

  const [positions, setPositions] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      const elementPositions = ref.current.map((element) => {
        return (
          element.getBoundingClientRect().left -
          element.parentElement!.getBoundingClientRect().left
        );
      });
      setPositions(elementPositions); // To check positions
    }

    // This will log the ref after the component has mounted
  }, [ref.current.length]);
  return (
    <section className={styling.trust}>
      <h2> Ils nous font confiance</h2>

      <ListSlider style={style} positions={positions} bothWays middleArrows>
        <div className={styling.clients}>
          <ScrollableContent ref={ref} />
        </div>
      </ListSlider>
    </section>
  );
}

const ScrollableContent = forwardRef<HTMLDivElement[], {}>(({}, ref: any) => (
  <>
    <div className={styling.logo}>
      <Logo />1
    </div>
    <div className={styling.logo}>
      <Logo />2
    </div>
    <div className={styling.logo}>
      <Logo />3
    </div>
    <div
      className={styling.logo}
      ref={(el) => {
        if (el) ref.current[0] = el;
      }}
    >
      <Logo />4
    </div>

    {/* REPEAT HERE */}
    <div
      className={styling.logo}
      ref={(el) => {
        if (el) ref.current[1] = el;
      }}
    >
      <Logo />1
    </div>
    <div
      className={styling.logo}
      ref={(el) => {
        if (el) ref.current[2] = el;
      }}
    >
      <Logo />2
    </div>
    <div
      className={styling.logo}
      ref={(el) => {
        if (el) ref.current[3] = el;
      }}
    >
      <Logo />3
    </div>
    <div
      className={styling.logo}
      ref={(el) => {
        if (el) ref.current[4] = el;
      }}
    >
      <Logo />4
    </div>

    {/* REPEAT HERE */}

    <div
      className={styling.logo}
      ref={(el) => {
        if (el) ref.current[5] = el;
      }}
    >
      <Logo />1
    </div>
    <div className={styling.logo}>
      <Logo />2
    </div>
    <div className={styling.logo}>
      <Logo />3
    </div>
    <div className={styling.logo}>
      <Logo />4
    </div>
  </>
));

ScrollableContent.displayName = "ScrollableContent";
