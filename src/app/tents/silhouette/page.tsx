import FirstSection from "@/components/sections/tents/FirstSection/FirstSection";
import Header from "@/components/structure/Header/Header";
import React from "react";
import styles from "./page.module.scss";
import ImageTest2 from "@/assets/images/linkedin.svg?react";
import TentImage from "@/assets/images/placeholder.jpeg";

import ImageTest1 from "@/assets/images/sun.svg?react";

import Drops from "@/assets/images/drops.svg?react";
import CaracSlider from "@/components/sections/carac-slider/CaracSlider";
import DraggableSlider from "@/components/blocks/Slider/Slider";
import TentConfig from "@/components/sections/tents/TentConfig/TentConfig";
import Button from "@/components/items/Button/Button";
import LogoSection from "@/components/sections/tents/LogoSection/LogoSection";
import Footer from "@/components/structure/Footer/Footer";
const TentSilhouette = () => {
  const caracSliderData = [
    { title: "imperméable", Icon: <Drops /> },
    { title: "deuxieme", Icon: <ImageTest2 /> },
    { title: "troisieme", Icon: <ImageTest1 /> },
  ];

  const images = [
    { image: TentImage, alt: "tent" },
    { image: TentImage, alt: "tent" },
    { image: TentImage, alt: "tent" },
  ];
  return (
    <div className={styles.tent}>
      <Header style="white" />

      <FirstSection
        data={{
          title: `La tente Silhouette,
le choix d’une élégance assumée
`,
          description: <Description />,
        }}
        type="silhouette"
      />

      <CaracSlider style="tent" sliderData={caracSliderData} />
      <DraggableSlider elements={images} style="tent" />

      <TentConfig
        title="Configurations possibles 
avec une tente silhouette 
10 x 16 m (134 m²)"
        list={[
          "Cérémonie : 220 personnes",
          "Cocktail : 160 personnes",
          "Walking dinner : 130 personnes",
          "Diner assis : 85 personnes",
        ]}
      />

      <LogoSection />

      <Footer />
    </div>
  );
};

const Description = () => {
  return (
    <>
      <p>
        {" "}
        {`Impressionnante par son envergure 
et son élégance, la tente silhouette séduit par son incroyable prestance.`}{" "}
      </p>
      <p>
        {" "}
        {`Elle se distingue par sa toile de voile ivoire translucide et ses poteaux en bois massifs. Soutenues par des poteaux centraux, 
elle se déploie telle une vague 
qui lui donne son aspect si unique.`}{" "}
      </p>
      <p>
        {" "}
        {`Fruit d’un savoir-faire d’excellence, chaque tente silhouette est fabriquée à la main 
par des voiliers spécialisés. Cette qualité ainsi que ses poteaux en bois massifs 
lui confèrent une solidité à l’épreuve 
des éléments. Elles se déclinent en plus 
de quinze tailles différentes afin de s’adapter à vos projets`}{" "}
      </p>
      <p>
        {" "}
        {`Totalement personnalisable, la tente silhouette vous laisse la main pour imaginer le rendu de votre choix : 
ouverte ou fermée avec des parois latérales, avec ou sans plancher en bois, des allées pour connecter vos différentes tentes, une décoration à votre image…`}{" "}
      </p>
    </>
  );
};

export default TentSilhouette;
