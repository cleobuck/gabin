import Footer from "@/components/structure/Footer/Footer";
import Header from "@/components/structure/Header/Header";
import React from "react";
import styles from "./about.module.scss";

import OurValues from "./components/OurValues/OurValues";
import WhoAreWe from "./components/whoarewe/WhoAreWe";
import FAQ from "./components/FAQ/FAQ";
import { ResizeScript } from "@/components/ResizeScript";

const About = () => {
  return (
    <div className={styles.about}>
      <ResizeScript />
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
