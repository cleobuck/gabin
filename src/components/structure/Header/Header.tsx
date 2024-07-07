// components/Header.js

"use client";
import React, { useState } from "react";
import styling from "./Header.module.scss";
import UpperLogo from "@/assets/images/upper-logo.svg?react";

import PrimaryMenu from "./components/PrimaryMenu";
import SecondaryMenu from "./components/SecondaryMenu";
import Overlay from "./components/Overlay";

const Header = ({ style }) => {
  const [whichMenuOpen, setWhichMenuOpen] = useState("");

  return (
    <header className={styling.header}>
      <Overlay
        whichMenuOpen={whichMenuOpen}
        closeMenu={() => setWhichMenuOpen("")}
      />
      <h1 className={styling.mainTitle}>Gabinouze events</h1>
      <UpperLogo
        className={`${styling.upperLogo} ${
          style === "white" ? styling.white : ""
        }`}
      />

      <PrimaryMenu
        openMenu={() => setWhichMenuOpen("main")}
        whichMenuOpen={whichMenuOpen}
        style={style}
      />

      <SecondaryMenu
        openMenu={() => setWhichMenuOpen("secondary")}
        whichMenuOpen={whichMenuOpen}
        style={style}
      />
    </header>
  );
};

export default Header;
