import React from "react";
import styling from "./Footer.module.scss";
import Sun from "@/assets/images/sun.svg?react";
import Logo from "@/assets/images/logo.svg?react";
import Insta from "@/assets/images/insta.svg?react";

import LinkedIn from "@/assets/images/linkedin.svg?react";

import Facebook from "@/assets/images/facebook.svg?react";

import TentImage from "@/assets/images/placeholder.jpeg";
import Image from "next/image";

type Props = { noImage?: boolean };

export default function Footer({ noImage }: Props) {
  return (
    <>
      {!noImage && (
        <Image alt="tente" className={styling.image} src={TentImage} />
      )}
      <div className={styling.footer}>
        {!noImage && <Sun className={styling.sun} />}
        <Logo className={styling.logo} />
        <nav className={styling.footerNav}>
          <ul>
            <li>
              <a href="#">QUI SOMMES NOUS? </a>
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

        <nav>
          <ul className={styling.socialNav}>
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
      </div>
    </>
  );
}
