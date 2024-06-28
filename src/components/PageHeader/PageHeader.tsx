import React from "react";
import Header from "../Header/Header";
import styling from "./PageHeader.module.scss";

import BackgroundImage from "@/assets/images/placeholder.jpeg";

type Props = {};

export default function PageHeader({ className, title }: Props) {
  return (
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
  );
}
