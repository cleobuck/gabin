import Footer from "@/components/structure/Footer/Footer";
import Header from "@/components/structure/Header/Header";
import React from "react";
import styles from "./faq.module.scss";
import FirstSection from "./components/FirstSection/FirstSection";
import Text from "@/components/blocks/Text/Text";
import OurValues from "./components/OurValues/OurValues";

const FAQ = () => {
  return (
    <div className={styles.faq}>
      <Header />

      <h1>Á PROPOS </h1>

      <h2>Qui sommes-nous? </h2>

      <FirstSection />

      <Text slogan author="Gabin, fondateur d’Inouze">
        <p>
          “Inouze c’est finalement un projet très simple : proposer à chacun de
          retrouver la magie et le merveilleux qu’il y a à créer un événement
          sous une tente !”
        </p>
      </Text>

      <OurValues />
      <Footer />
    </div>
  );
};

export default FAQ;
