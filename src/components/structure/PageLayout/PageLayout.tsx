"use client";
import React, { ReactNode, useEffect, useState } from "react";
import styling from "./PageLayout.module.scss";

import BackgroundImage from "@/assets/images/placeholder.jpeg";
import WeddingImage from "@/assets/images/wedding.jpeg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideMenu from "../side-menu/SideMenu";
import ListSlider from "../../../components/sections/list-slider/ListSlider";
import Trust from "@/components/blocks/Trust/Trust";
import TentTeaser from "@/components/TentTeaser/TentTeaser";

import ImageTest2 from "@/assets/icons/linkedin.svg?react";

import ImageTest1 from "@/assets/icons/sun.svg?react";

import Drops from "@/assets/icons/drops.svg?react";
import CaracSlider from "@/components/sections/carac-slider/CaracSlider";
import Sun from "@/assets/icons/sun.svg?react";
import Text from "@/components/blocks/Text/Text";
import Banner from "@/components/blocks/Banner/Banner";
import { ResizeScript } from "@/components/ResizeScript";
import StepsSlider from "./StepsSlider/StepsSlider";
import { IsItAPhone } from "@/utils";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
  style: string;
  removeDashes?: boolean;
};

export default function PageLayout({
  className,
  title,
  children,
  style,
  removeDashes,
}: Props) {
  const isPhone = IsItAPhone();

  const [scrolledSideMenu, setScrolledStyleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.body.scrollTop;
      const viewportHeight = window.innerHeight;

      if (scrollPosition >= viewportHeight - 200) {
        setScrolledStyleMenu(true);
      } else {
      }
    };

    document.body.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styling.services}>
      <ResizeScript />

      {isPhone && <SideMenu />}
      <SideMenu
        topView
        className={`${styling.sideMenu} ${
          scrolledSideMenu ? styling.scrolledMenu : ""
        }`}
      />
      <div
        className={`${className} ${styling.pageHeader}`}
        style={{
          backgroundImage: `url(${
            style === "weddings" ? WeddingImage : BackgroundImage
          })`,
        }}
      >
        <Sun className={styling.sun} />

        <Header style="white" />

        <div className={styling.content}>
          <h2
            className={`${styling.titleWithDashes} ${
              removeDashes ? styling.removeDashes : ""
            }`}
          >
            {title.toUpperCase()}
          </h2>

          <h2
            className={`${styling.titleWithoutDashes} ${
              removeDashes ? styling.removeDashes : ""
            }`}
          >
            {title.replace(/-/g, "").toUpperCase()}
          </h2>

          {isPhone && (
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
          )}
        </div>
      </div>
      {children}

      <Banner style={style} />

      <CaracSlider
        style={style}
        sliderData={[
          { title: "imperméable", Icon: <Drops /> },
          { title: "deuxieme", Icon: <ImageTest2 /> },
          { title: "troisieme", Icon: <ImageTest1 /> },
        ]}
      />
      <Text slogan>
        <p className={styling.slogan}>
          Avec nos solutions clés en main pour votre mariage, c’est la garantie
          de créer des souvenirs inoubliables pour vous et vos invités.
        </p>
      </Text>

      <TentTeaser style={style} />

      <div className={styling.stepSliderContainer}>
        <StepsSlider style={style} />
      </div>

      <Trust style={style} />

      <div className={styling.adTextWrapper}>
        <Text className={styling.adText}>
          <p>
            {` Louer nos structures toute une saison ? C'est désormais possible avec
          la location longue durée.`}
          </p>

          <p>
            {`
Vous louez une tente silhouette ou stretch 
toute la saison et nous nous occupons 
de son installation, de l'entretien 
et du démontage.`}
          </p>
        </Text>
      </div>
      <Footer />
    </div>
  );
}
