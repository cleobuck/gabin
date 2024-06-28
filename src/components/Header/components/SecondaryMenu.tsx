"use client";

import React, { useEffect, useState } from "react";
import MenuButton from "@/assets/images/menu-button.svg?react";
import styling from "./SecondaryMenu.module.scss";
type Props = {};

export default function SecondaryMenu({ whichMenuOpen, openMenu }: Props) {
  return (
    <>
      <button
        aria-controls="main-menu"
        aria-expanded={whichMenuOpen === "secondary"}
        onClick={openMenu}
        className={` ${styling.button}`}
      >
        <MenuButton />
      </button>
      <nav
        id="secondary-menu"
        aria-label="Secondary Navigation"
        aria-expanded={whichMenuOpen === "secondary"}
        className={styling.secondaryMenu}
      >
        <ul>
          <li>
            <a className={styling.SecondaryMenuItem} href="#home">
              Devis
            </a>
          </li>
          <li>
            <a className={styling.SecondaryMenuItem} href="#about">
              Accueil
            </a>
          </li>
          <li>
            <a className={styling.SecondaryMenuItem} href="#services">
              Actualités
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
