import Footer from "@/components/structure/Footer/Footer";
import Header from "@/components/structure/Header/Header";
import React from "react";
import styles from "./about.module.scss";
import FirstSection from "./components/FirstSection/FirstSection";
import Text from "@/components/blocks/Text/Text";
import OurValues from "./components/OurValues/OurValues";
import WhoAreWe from "./components/whoarewe/WhoAreWe";
import FAQ from "./components/FAQ/FAQ";

const About = () => {
  return (
    <div className={styles.about}>
      <Header />

      <h1>Á PROPOS </h1>
      <WhoAreWe />

      <OurValues />

      <FAQ />
      <Footer />
    </div>
  );
};

export default About;
