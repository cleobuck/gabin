import React, { ReactNode } from "react";
import styling from "./PageLayout.module.scss";

import BackgroundImage from "@/assets/images/placeholder.jpeg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideMenu from "../side-menu/SideMenu";
import ListSlider from "../../../components/sections/list-slider/ListSlider";
import Trust from "@/components/blocks/Trust/Trust";
import TentTeaser from "@/components/TentTeaser/TentTeaser";

import ImageTest2 from "@/assets/images/linkedin.svg?react";

import ImageTest1 from "@/assets/images/sun.svg?react";

import Drops from "@/assets/images/drops.svg?react";
import CaracSlider from "@/components/sections/carac-slider/CaracSlider";
import Sun from "@/assets/images/sun.svg?react";
import Text from "@/components/blocks/Text/Text";
import Banner from "@/components/blocks/Banner/Banner";
import { ResizeScript } from "@/components/ResizeScript";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
  style: string;
};

export default function PageLayout({
  className,
  title,
  children,
  style,
}: Props) {
  return (
    <>
      <ResizeScript />

      <SideMenu />
      <div
        className={`${className} ${styling.pageHeader}`}
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Sun className={styling.sun} />

        <Header style="white" />

        <div className={styling.content}>
          <h2>{title.toUpperCase()}</h2>

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

      <Banner style={style} />

      <CaracSlider
        style="weddings"
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
      <ListSlider style={style} />

      <Trust />

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
    </>
  );
}
