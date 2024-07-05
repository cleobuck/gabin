import React from "react";
import styling from "./Trust.module.scss";
import Logo from "@/assets/images/logo.svg?react";

type Props = {};

export default function Trust({}: Props) {
  return (
    <section className={styling.trust}>
      <h2> Ils nous font confiance</h2>

      <div className={styling.clients}>
        <Logo />
        <Logo />
      </div>
    </section>
  );
}
