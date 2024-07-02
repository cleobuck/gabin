"use client";

import React, { useEffect, useState } from "react";
import { PrimaryMenuData } from "./PrimaryMenu.data";
import styling from "./PrimaryMenu.module.scss";
type Props = {};

export default function PrimaryMenu({ openMenu, whichMenuOpen, style }: Props) {
  return (
    <>
      <button
        aria-controls="main-menu"
        aria-expanded={whichMenuOpen === "main"}
        onClick={openMenu}
        className={`${styling.mainMenuToggle} ${
          whichMenuOpen ? styling.menuOpen : ""
        } ${style === "white" ? styling.white : ""}`}
      >
        <span>MENU </span>
      </button>

      <nav
        id="main-menu"
        aria-label="Primary Navigation"
        aria-expanded={whichMenuOpen === "main"}
        className={styling.mainMenu}
      >
        <ul>
          {PrimaryMenuData.map((item, key) => (
            <li key={key}>
              <a
                href={`${process.env.BASE_URL}${item.href}`}
                className={styling.mainMenuItem}
              >
                {item.label.toUpperCase()}
              </a>
              {item.children && (
                <ul className={styling.subMenu}>
                  {item.children.map((child, index) => (
                    <li key={index}>
                      <a
                        href={child.href}
                        className={styling.secondaryMenuItem}
                      >
                        <span className={styling.circle}></span>{" "}
                        {child.label.toUpperCase()}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
