import React from "react";
import DevisForm from "./DevisForm";
import styles from "./page.module.scss";
import Footer from "@/components/structure/Footer/Footer";
import SideMenu from "@/components/structure/side-menu/SideMenu";
const DevisPage = () => {
  return (
    <div className={styles.devis}>
      <SideMenu type="back" topView />
      <div className={styles.formBox}>
        <h1>
          <span> DEVIS</span>
        </h1>
        <DevisForm />
      </div>

      <Footer noImage />
    </div>
  );
};

export default DevisPage;
