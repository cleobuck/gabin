import React from "react";
import styles from "./SecondSection.module.scss";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import TentImage from "@/assets/images/placeholder.jpeg";
import BulletPoint from "@/assets/images/bullet-point.svg?react";
type Props = {};

const SecondSection: React.FC<Props> = ({}) => {
  return (
    <section className={styles.secondSection}>
      <figure>
        <blockquote>
          “C’est sous un chapiteau que j’ai vu se créer les plus beaux moments
          d’harmonie”
        </blockquote>

        <figcaption> Gabin, fondateur d’Inouze</figcaption>

        <ul>
          <li>
            <BulletPoint className={styles.bulletPoint} /> Mariage
          </li>
          <li>
            <BulletPoint className={styles.bulletPoint} /> Entreprise
          </li>
          <li>
            <BulletPoint className={styles.bulletPoint} /> Collectivité
          </li>
          <li>
            <BulletPoint className={styles.bulletPoint} /> Planner
          </li>
        </ul>
      </figure>

      <div className={styles.secondSectionImage}>
        <figure className={styles.logoImage}>
          <Image src={Logo} alt="logo" fill={true} />
        </figure>

        <figure className={styles.image}>
          <Image src={TentImage} alt="tent" fill={true} />
        </figure>
      </div>

      <p>
        Parce que sous un chapiteau s’éveille toujours un soupçon de magie,
        Inouze vous propose ses structures haut de gamme pour donner une
        nouvelle dimension à votre événement.
      </p>
    </section>
  );
};

export default SecondSection;
