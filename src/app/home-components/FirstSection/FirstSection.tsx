"use client";

import React, { useEffect, useReducer, useRef, useState } from "react";
import styles from "./FirstSection.module.scss";
import Sun from "@/assets/icons/sun.svg?react";
import { IsItAPhone } from "@/utils";
import BlockQuote from "../BlockQuote/BlockQuote";

type Props = {};

const FirstSection: React.FC<Props> = ({}) => {
  const isPhone = IsItAPhone();

  return (
    <>
      <section className={styles.firstSection}>
        <h1>
          {"Location de tentes de réception sur mesure et installation".toUpperCase()}
        </h1>

        <div className={styles.buttonPart}>
          <Sun className={styles.sun} />
        </div>

        <div className={styles.quoteSection}>
          <BlockQuote />
        </div>
      </section>
    </>
  );
};

export default FirstSection;
