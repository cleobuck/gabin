"use client";

import React, { useEffect, useState } from "react";
import styling from "./sideMenu.module.scss";
import { useRouter } from "next/navigation";
import { createClassNameString } from "@/utils";
type Props = {
  type?: string;
  topView?: boolean;
  className?: string;
  style?: string;
  scrollLimit?: number;
};

export default function SideMenu({
  type = "menu",
  topView,
  className,
  style = "home",
  scrollLimit = undefined,
}: Props) {
  const [scrolledDown, setScrolledDown] = useState(false);

  const [isVisible, setVisible] = useState(topView);

  useEffect(() => {
    {
      const handleScroll = () => {
        const scrollPosition = document.body.scrollTop;
        const viewportHeight = window.innerHeight;

        const sixtyFourVW = 0.64 * window.innerWidth;

        if (!topView) {
          if (
            scrollLimit
              ? scrollPosition >= scrollLimit
              : scrollPosition >= viewportHeight
          ) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }

        if (scrollPosition >= sixtyFourVW) {
          setScrolledDown(true);
        } else {
          setScrolledDown(false);
        }
      };

      document.body.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        document.body.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollLimit, topView]);

  const router = useRouter();

  const classNames = [
    {
      condition: !!isVisible,
      name: styling.menuVisible,
    },
    {
      condition: type !== "menu",
      name: styling.singleButton,
    },
    {
      condition: !!topView,
      name: styling.topView,
    },

    { condition: !!style, name: styling[style!] },
    { condition: !!className, name: className! },

    { condition: !!scrolledDown, name: styling.isScrolledDown },
  ];

  return (
    <nav
      aria-hidden={true}
      className={`${styling.sideMenu}  ${createClassNameString(classNames)}`}
    >
      <ul>
        {type === "menu" ? (
          <>
            <li>
              <a href={`${process.env.BASE_URL}/devis`}> DEVIS </a>
            </li>
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
