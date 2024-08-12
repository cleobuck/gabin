"use client";

import React from "react";
import styling from "./Trust.module.scss";
import Logo from "@/assets/images/logo.svg?react";
import { IsItAPhone } from "@/utils";
import ListSlider from "@/components/sections/list-slider/ListSlider";

type Props = { style: string };

export default function Trust({ style }: Props) {
  const isPhone = IsItAPhone();
  return (
    <section className={styling.trust}>
      <h2> Ils nous font confiance</h2>

      <ListSlider style={style}>
        <div className={styling.clients}>
          <ScrollableContent />
        </div>
      </ListSlider>
    </section>
  );
}

const ScrollableContent = () => (
  <>
    <div className={styling.logo}>
      <Logo />
    </div>
    <div className={styling.logo}>
      <Logo />
    </div>
    <div className={styling.logo}>
      <Logo />
    </div>
    <div className={styling.logo}>
      <Logo />
    </div>
  </>
);
