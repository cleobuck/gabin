import React from "react";
import styles from "./ThankYou.module.scss";

type Props = {};

const ThankYou: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <h3> MERCI </h3>
      <p>
        Merci pour votre message, nous l’avons bien reçu et nous engageons à
        vous répondre dans les 48h !
      </p>
      <p>Voici ensuite comment se déroule une collaboration avec Inouze :</p>

      <ul>
        <li>
          Nous vous envoyons un devis avec votre solution personnalisée clé en
          main (location, installation, désinstallation).
        </li>
        <li>
          Nous visitons le lieu à vos côtés ou de manière indépendante pour
          identifier les différentes contraintes et opportunités de celui-ci
          pour un rendu parfait.
        </li>
        <li>
          À la date souhaitée, nous installons les tentes qui accueilleront
          votre événement pour que tout soit prêt à temps.
        </li>
        <li>Vous profitez d’un cadre idéal, pour des souvenirs mémorables !</li>
        <li> Le lendemain, nous désinstallons toute la structure. </li>
      </ul>

      <div className={styles.bar}></div>
    </div>
  );
};

export default ThankYou;
