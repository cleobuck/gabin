import React from "react";
import DevisForm from "./DevisForm";
import styles from "./page.module.scss";
const DevisPage = () => {
  return (
    <div className={styles.devis}>
      <div className={styles.formBox}>
        <h1>
          <span> DEVIS</span>
        </h1>
        <DevisForm />
      </div>
    </div>
  );
};

export default DevisPage;
