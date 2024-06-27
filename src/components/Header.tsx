// components/Header.js
import React from "react";
import styling from "./Header.module.scss";
import UpperLogo from "@/assets/images/upper-logo.svg?react";

import MenuButton from "@/assets/images/menu-button.svg?react";

import MenuToggle from "./MenuToggle";
import { mainMenuData } from "./HeaderData";

const Header = () => {
  return (
    <header className={styling.header}>
      <h1 className={styling.mainTitle}>Gabinouze events</h1>
      <UpperLogo className={styling.upperLogo} />

      {/* Menu Toggle Button */}
      <MenuToggle className={styling.mainMenuToggle} menuId="main-menu">
        MENU
      </MenuToggle>

      <nav
        id="main-menu"
        aria-label="Primary Navigation"
        className={styling.mainMenu}
      >
        <ul>
          {mainMenuData.map((item) => (
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

      {/* Secondary Menu Toggle Button */}
      <MenuToggle menuId="secondary-menu">
        <MenuButton />
      </MenuToggle>

      <nav
        id="secondary-menu"
        aria-label="Secondary Navigation"
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
    </header>
  );
};

export default Header;
