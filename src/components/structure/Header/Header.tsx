// components/Header.js

"use client";
import React, { ReactNode, useState } from "react";
import styling from "./Header.module.scss";
import UpperLogo from "@/assets/logos/upper-logo.svg?react";

import PrimaryMenu from "./components/PrimaryMenu";
import SecondaryMenu from "./components/SecondaryMenu";
import Overlay from "./components/Overlay";
import CloseUpTent from "@/assets/images/close-up-tent.jpg";
import { StaticImageData } from "next/image";

const Header = ({
  style,
  children,
}: {
  style?: string;
  children?: ReactNode;
}) => {
  const [whichMenuOpen, setWhichMenuOpen] = useState("");

  const background: Record<string, StaticImageData> = {
    home: CloseUpTent,
  };

  return (
    <header
      style={{
        background:
          style && background[style]
            ? `linear-gradient(rgba(20, 48, 27, 0.57), rgba(20, 48, 27, 0.57)), url(${background[style].src})`
            : undefined,
      }}
      className={`${styling.header} ${style ? styling[style] : ""}`}
    >
      <div className={styling.navAndLogo}>
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
          closeMenu={() => setWhichMenuOpen("")}
          whichMenuOpen={whichMenuOpen}
          style={style}
        />

        <SecondaryMenu
          openMenu={() => setWhichMenuOpen("secondary")}
          whichMenuOpen={whichMenuOpen}
          style={style}
        />
      </div>

      {children}
    </header>
  );
};

export default Header;
