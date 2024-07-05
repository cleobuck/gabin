"use client";

import React, { useEffect, useState } from "react";
import styling from "./sideMenu.module.scss";
type Props = {};

export default function SideMenu({}: Props) {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.body.scrollTop;
      const viewportHeight = window.innerHeight;

      console.log(scrollPosition);

      if (scrollPosition >= viewportHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    document.body.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${isVisible ? styling.menuVisible : ""} ${styling.sideMenu}`}
    >
      <ul>
        <li>
          <a href={`${process.env.BASE_URL}/devis`}> DEVIS </a>
        </li>

        <li>
          <a href={`${process.env.BASE_URL}/contact`}> CONTACT </a>
        </li>
      </ul>
    </nav>
  );
}
