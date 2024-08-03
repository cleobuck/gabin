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
import { ResizeScript } from "@/components/ResizeScript";
const TentStretch = () => {
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
      <ResizeScript />
      <Header style="white" />

      <FirstSection
        data={{
          title: `La tente Stretch, 
le choix de la modularité
`,
          description: <Description />,
        }}
        type="stretch"
      />

      <CaracSlider style="tent" sliderData={caracSliderData} />
      <DraggableSlider elements={images} style="tent" />

      <TentConfig
        title="Configurations possibles 
avec une tente Stretch 
10 x 15 m (150 m²)
"
        list={[
          "Cérémonie : 250 personnes",
          "Cocktail : 180 personnes",
          "Walking dinner : 150 personnes",
          "Diner assis : 100 personnes",
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
        {`Une flexibilité extrême avec classe 
et élégance, c’est ce que vous apportera 
la tente stretch ! `}
      </p>
      <p>
        {` 
Ultra modulaire, elle peut être fixée sur tout type de sol ou rattachée facilement 
à toutes sortes de murs ou bâtiments 
pour créer un espace extérieur. 

`}
      </p>
      <p>
        {`Sa flexibilité ne s’arrête pas là, la tente stretch est disponible dans un large panel de tailles, de formes et de combinaisons. Les toiles étant connectables entre elles, 
la tente Stretch pousse encore les limites de la modularité et vient véritablement s’adapter à vos envies et vos besoins.`}
      </p>
      <p>
        {`
Totalement ouverte, complètement 
ou partiellement fermée, avec 
ou sans plancher en bois, avec système 
de chauffage ou de climatisation, 
pour un comité réduit ou plusieurs centaines de personnes, la tente stretch offre des possibilités infinies où la seule limite est votre imagination ! `}
      </p>
    </>
  );
};

export default TentStretch;
