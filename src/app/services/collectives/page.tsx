import React from "react";
import styling from "./collectives.module.scss";
import SideMenu from "@/components/structure/side-menu/SideMenu";
import Trust from "@/components/blocks/Trust/Trust";
import Banner from "@/components/blocks/Banner/Banner";
import Text from "@/components/blocks/Text/Text";
import PageLayout from "@/components/structure/PageLayout/PageLayout";

const Collectives = () => {
  return (
    <>
      <PageLayout title="collecti- vités" className={styling.collectives}>
        <Trust />

        <Banner />

        <Text slogan>
          <p>
            Avec nos solutions clés en main pour votre mariage, c’est la
            garantie de créer des souvenirs inoubliables pour vous et vos
            invités.
          </p>
        </Text>
      </PageLayout>
    </>
  );
};

export default Collectives;
