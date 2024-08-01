"use client";

import React from "react";
import styling from "./Trust.module.scss";
import Logo from "@/assets/images/logo.svg?react";
import { IsItAPhone } from "@/utils";

type Props = {};

export default function Trust({}: Props) {
  const isPhone = IsItAPhone();
  return (
    <section className={styling.trust}>
      <h2> Ils nous font confiance</h2>

      <div className={styling.clients}>
        <Logo />
        <Logo />

        {!isPhone && <Logo />}
      </div>
    </section>
  );
}
