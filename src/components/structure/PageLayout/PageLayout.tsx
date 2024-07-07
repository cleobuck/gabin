import React from "react";
import styling from "./PageLayout.module.scss";

import BackgroundImage from "@/assets/images/placeholder.jpeg";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideMenu from "../side-menu/SideMenu";

type Props = {};

export default function PageLayout({ className, title, children }: Props) {
  return (
    <>
      <SideMenu />
      <div
        className={`${className} ${styling.pageHeader}`}
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Header style="white" />

        <div className={styling.content}>
          <h2> {title.toUpperCase()} </h2>

          <nav>
            <ul>
              <li>
                <div className={styling.circle}></div>{" "}
                <a href={`${process.env.BASE_URL}/devis`}> DEVIS </a>
              </li>
              <li>
                <div className={styling.circle}></div>{" "}
                <a href={`${process.env.BASE_URL}/contact`}> CONTACT </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {children}

      <Footer />
    </>
  );
}
