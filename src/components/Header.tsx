// components/Header.js
import React from "react";
import styling from "./Header.module.scss";
import UpperLogo from "@/assets/images/upper-logo.svg?react";

import MenuButton from "@/assets/images/menu-button.svg?react";

import MenuToggle from "./MenuToggle";

const Header = () => {
  return (
    <header className={styling.header}>
      <h1 className={styling.mainTitle}>Gabinouze events</h1>
      <UpperLogo className={styling.upperLogo} />

      {/* Menu Toggle Button */}
      <MenuToggle menuId="main-menu">Menu</MenuToggle>

      <nav
        id="main-menu"
        aria-label="Primary Navigation"
        className={styling.mainMenu}
      >
        <ul>
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#about">Nos services</a>
            <ul>
              <li>
                <a href="#about">Mariages</a>
              </li>
              <li>
                <a href="#about">Entreprises</a>
              </li>
              <li>
                <a href="#about">Collectivités</a>
              </li>
              <li>
                <a href="#about">Évenements</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#services">Nos tentes</a>
            <ul>
              <li>
                <a href="#about">Strecht</a>
              </li>
              <li>
                <a href="#about">Silhouette</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact">Á propos</a>
            <ul>
              <li>
                <a href="#about">Qui Sommes nous</a>
              </li>
              <li>
                <a href="#about">Nos valeurs</a>
              </li>
              <li>
                <a href="#about">FAQ</a>
              </li>
            </ul>
          </li>
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
