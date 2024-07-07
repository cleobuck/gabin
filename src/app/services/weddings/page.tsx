import React from "react";

import styling from "./weddings.module.scss";

import PageLayout from "@/components/structure/PageLayout/PageLayout";
import ImageSlider from "./image-slider/ImageSlider";
import Text from "@/components/blocks/Text/Text";

import TentImage from "@/assets/images/placeholder.jpeg";
import LargeImage from "@/components/blocks/LargeImage/LargeImage";
import Banner from "@/components/blocks/Banner/Banner";
import CaracSlider from "./carac-slider/CaracSlider";
import ListSlider from "./list-slider/ListSlider";
import Trust from "@/components/blocks/Trust/Trust";

const Weddings = () => {
  return (
    <div>
      <PageLayout title="Mariages" className={styling.weddings}>
        <Text title="Une atmosphère unique pour votre grand jour">
          <p>
            Vous rêvez d’un mariage champêtre, bucolique, en plein air ? D’une
            ambiance spéciale à la fois exceptionnelle et intimiste, d’un lieu
            aussi magique que votre histoire ?
          </p>
          <p>
            Nous créons pour vous la structure pour accueillir ce beau moment !
          </p>
        </Text>

        <ImageSlider />

        <Text title="Un espace tout en élégance pour le jour J">
          <p>
            Idéales pour créer une atmosphère unique, nos structures s'intègrent
            naturellement au lieu de votre mariage et le subliment pour vous
            assurer un espace chic et élégant.
          </p>
          <p>
            Que vous optiez pour la tente stretch, à la modularité infinie, ou
            la tente silhouette, tout en élégance, nos structures s’adaptent à
            vos envies et vos besoins pour une ambiance à l’image de votre
            amour.
          </p>
        </Text>

        <LargeImage image={{ src: TentImage, alt: "" }} style="wedding" />

        <Banner />

        <Text>
          <p>
            Fortes de leur identité propre, nos tentes offrent toutes deux
            flexibilité et liberté dans l’installation et la réalisation de
            votre projet.
          </p>
          <p>
            À l’écoute, nous saurons vous conseiller sur la solution la plus
            adaptée tout en se laissant guider par votre imagination pour
            aménager la structure de vos rêves.
          </p>
        </Text>

        <CaracSlider />

        <Text slogan>
          <p>
            Avec nos solutions clés en main pour votre mariage, c’est la
            garantie de créer des souvenirs inoubliables pour vous et vos
            invités.
          </p>
        </Text>

        <ListSlider />

        <Trust />
      </PageLayout>
    </div>
  );
};

export default Weddings;
