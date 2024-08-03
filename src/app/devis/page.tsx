import React from "react";
import DevisForm from "./DevisForm";
import styles from "./page.module.scss";
import Footer from "@/components/structure/Footer/Footer";
import { ResizeScript } from "@/components/ResizeScript";
import Image from "next/image";

const DevisPage = () => {
  return (
    <div className={styles.devis}>
      <ResizeScript />
      <DevisForm />

      <Footer noImage className={styles.footer} />
    </div>
  );
};

export default DevisPage;
