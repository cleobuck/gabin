import React from "react";
import DevisForm from "./DevisForm";
import styles from "./page.module.scss";
import Footer from "@/components/structure/Footer/Footer";
const DevisPage = () => {
  return (
    <div className={styles.devis}>
      <DevisForm />

      <Footer noImage />
    </div>
  );
};

export default DevisPage;
