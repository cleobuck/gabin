// components/Header.js
import React from "react";
import styling from "./Header.module.scss";
import UpperLogo from "@/assets/images/upper-logo.svg?react";

import PrimaryMenu from "./components/PrimaryMenu";
import SecondaryMenu from "./components/SecondaryMenu";

const Header = () => {
  return (
    <header className={styling.header}>
      <h1 className={styling.mainTitle}>Gabinouze events</h1>
      <UpperLogo className={styling.upperLogo} />

      <PrimaryMenu />

      <SecondaryMenu />
    </header>
  );
};

export default Header;
