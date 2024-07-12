"use client";

import React, { useEffect, useState } from "react";
import styling from "./sideMenu.module.scss";
import { useRouter } from "next/navigation";
type Props = { type?: string; topView?: boolean };

export default function SideMenu({ type = "menu", topView }: Props) {
  const [isVisible, setVisible] = useState(topView);
  useEffect(() => {
    if (!topView) {
      const handleScroll = () => {
        const scrollPosition = document.body.scrollTop;
        const viewportHeight = window.innerHeight;

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
    }
  }, []);

  const router = useRouter();

  return (
    <nav
      className={`${isVisible ? styling.menuVisible : ""} ${styling.sideMenu} ${
        type !== "menu" ? styling.singleButton : ""
      } ${topView ? styling.topView : ""}`}
    >
      <ul>
        {type === "menu" ? (
          <>
            {" "}
            <li>
              <a href={`${process.env.BASE_URL}/devis`}> DEVIS </a>
            </li>
            <li>
              <a href={`${process.env.BASE_URL}/contact`}> CONTACT </a>
            </li>{" "}
          </>
        ) : (
          <li>
            <a onClick={() => router.back()}>
              {type === "back" ? "RETOUR" : "FERMER"}{" "}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
