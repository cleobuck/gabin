"use client";
import React from "react";
import { PrimaryMenuData } from "./PrimaryMenu.data";
import styling from "./PrimaryMenu.module.scss";
import { IsItAPhone } from "@/utils";
import SideMenu from "../../side-menu/SideMenu";
type Props = {
  style?: string;
  openMenu: () => void;
  whichMenuOpen: string;
  closeMenu: () => void;
};

export default function PrimaryMenu({
  openMenu,
  whichMenuOpen,
  style,
  closeMenu,
}: Props) {
  const isPhone = IsItAPhone();

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
        className={` ${styling.mainMenu} ${style ? styling[style] : ""}`}
      >
        <ul className={styling.mainMenuList}>
          {PrimaryMenuData.map((item, key) => (
            <li
              key={key}
              className={styling.mainMenuItemLi}
              onClick={closeMenu}
            >
              <a
                href={
                  item.href ? `${process.env.BASE_URL}${item.href}` : undefined
                }
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
                        {isPhone && <span className={styling.circle}></span>}
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
