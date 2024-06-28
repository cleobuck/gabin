"use client";

import React, { useState } from "react";
import { PrimaryMenuData } from "./PrimaryMenu.data";
import styling from "./PrimaryMenu.module.scss";
type Props = {};

export default function PrimaryMenu({}: Props) {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <button
        aria-controls="main-menu"
        aria-expanded={isVisible}
        onClick={() => setVisible((isVisible) => !isVisible)}
        className={styling.mainMenuToggle}
      >
        MENU
      </button>

      <nav
        id="main-menu"
        aria-label="Primary Navigation"
        aria-expanded={isVisible}
        className={styling.mainMenu}
      >
        <ul>
          {PrimaryMenuData.map((item) => (
            <li>
              <a href={item.href} className={styling.mainMenuItem}>
                {item.label.toUpperCase()}
              </a>
              {item.children && (
                <ul className={styling.subMenu}>
                  {item.children.map((child) => (
                    <li>
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
