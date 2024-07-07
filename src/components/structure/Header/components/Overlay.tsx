"use client";

import React, { useEffect } from "react";
import styling from "./Overlay.module.scss";
import Xmark from "@/assets/images/xmark.svg?react";

type Props = { whichMenuOpen: string; closeMenu: () => void };

export default function Overlay({ whichMenuOpen, closeMenu }: Props) {
  useEffect(() => {
    if (whichMenuOpen) {
      // Disable body scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable body scrolling
      document.body.style.overflow = "";
    }

    // Cleanup function to reset body overflow when component unmounts or whichMenuOpen changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [whichMenuOpen]);
  return (
    <div
      className={`${whichMenuOpen ? styling[whichMenuOpen] : ""} ${
        styling.overlay
      }`}
    >
      <button onClick={() => closeMenu()}>
        <Xmark />
        FERMER
      </button>
    </div>
  );
}
