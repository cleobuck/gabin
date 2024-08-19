import React from "react";
import styling from "./Footer.module.scss";
import Sun from "@/assets/images/sun.svg?react";
import Logo from "@/assets/images/logo.svg?react";
import Insta from "@/assets/images/insta.svg?react";

import LinkedIn from "@/assets/images/linkedin.svg?react";

import Facebook from "@/assets/images/facebook.svg?react";

import TentImage from "@/assets/images/placeholder.jpeg";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";
import DevisButton from "@/components/items/Button/DevisButton";

type Props = { noImage?: boolean; className?: string };

export default function Footer({ noImage, className }: Props) {
  return (
    <div className={className ? className : ""}>
      {!noImage && (
        <ImageWithCredit
          alt="tente"
          className={styling.image}
          src={TentImage}
        />
      )}
      <div className={styling.footer}>
        {!noImage && <Sun className={styling.sun} />}
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
            </div>
          </ul>
        </nav>

        <DevisButton className={styling.devisButton} />
        <span className={styling.credit}> images : @Organic-Concept </span>
      </div>
    </div>
  );
}
