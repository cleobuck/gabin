import React from "react";
import styling from "./Footer.module.scss";
import Sun from "@/assets/icons/sun.svg?react";
import Logo from "@/assets/icons/logo.svg?react";
import Insta from "@/assets/icons/insta.svg?react";

import LinkedIn from "@/assets/icons/linkedin.svg?react";

import Facebook from "@/assets/icons/facebook.svg?react";

import TentImage from "@/assets/images/st-trop.jpeg";
import DevisButton from "@/components/items/Button/DevisButton";
import Trust from "@/components/blocks/Trust/Trust";

type Props = { noImage?: boolean; className?: string };

export default function Footer({ noImage, className }: Props) {
  return (
    <div className={className ? className : ""}>
      {!noImage && (
        <div
          className={styling.featuredImage}
          style={{
            background: `linear-gradient(rgba(20, 48, 27, 0.57), rgba(20, 48, 27, 0.57)), url(${TentImage.src})`,
          }}
        >
          <h3>
            NOUS RÉPONDONS À VOS QUESTIONS JUSTE <a href="#">ICI</a>
          </h3>

          <Sun className={styling.desktopSun} />
        </div>
      )}

      <Trust style="home" className={styling.mobileHidden} />
      <div className={styling.footer}>
        {!noImage && <Sun className={`${styling.sun} `} />}
        <Logo className={styling.logo} />
        <nav className={styling.footerNav}>
          <ul>
            <li>
              <a href={`${process.env.BASE_URL}/about#who`}>QUI SOMMES NOUS?</a>
            </li>
            <li>
              <a href="#"> CONTACT </a>
            </li>
            <li>
              <a href="#"> MENTIONS LÉGALES </a>
            </li>
            <li>
              <a href="#"> PLAN DU SITE </a>
            </li>
          </ul>
        </nav>

        <nav className={styling.socialNav}>
          <ul>
            <li>
              <a href="#">
                {" "}
                <Insta />{" "}
              </a>
            </li>
            <div>
              <li>
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedIn />
                </a>
              </li>

              <li>
                <DevisButton className={styling.devisButton} />
              </li>
            </div>
          </ul>
        </nav>

        <span className={styling.credit}> images : @Organic-Concept </span>
      </div>
    </div>
  );
}
