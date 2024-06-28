"use client";

import React, { useState } from "react";
import MenuToggle from "./MenuToggle";
import MenuButton from "@/assets/images/menu-button.svg?react";
import styling from "./SecondaryMenu.module.scss";
type Props = {};

export default function SecondaryMenu({}: Props) {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <button
        aria-controls="main-menu"
        aria-expanded={isVisible}
        onClick={() => setVisible((isVisible) => !isVisible)}
      >
        <MenuButton />
      </button>
      <nav
        id="secondary-menu"
        aria-label="Secondary Navigation"
        aria-expanded={isVisible}
        className={styling.secondaryMenu}
      >
        <ul>
          <li>
            <a href="#home">Devis</a>
          </li>
          <li>
            <a href="#about">Accueil</a>
          </li>
          <li>
            <a href="#services">Actualités</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
