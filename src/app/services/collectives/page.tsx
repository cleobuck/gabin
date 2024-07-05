import React from "react";
import styling from "./collectives.module.scss";
import PageLayout from "@/components/PageLayout/PageLayout";
import SideMenu from "@/components/side-menu/SideMenu";
import Trust from "@/components/Trust/Trust";
import Banner from "@/components/Banner/Banner";
import Text from "@/components/Text/Text";

const Collectives = () => {
  return (
    <>
      <SideMenu />
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
