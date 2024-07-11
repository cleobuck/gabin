import Footer from "@/components/structure/Footer/Footer";
import Header from "../components/structure/Header/Header";
import styles from "./page.module.scss";
import TentImage from "@/assets/images/placeholder.jpeg";

import Logo from "@/assets/images/logo.png";

import Image from "next/image";
import DevisButton from "@/components/items/Button/DevisButton";
import Sun from "@/assets/images/sun.svg?react";
import SideMenu from "@/components/structure/side-menu/SideMenu";
import Banner from "@/components/blocks/Banner/Banner";
import Trust from "@/components/blocks/Trust/Trust";
import HomeSlider from "./home-components/HomeSlider/HomeSlider";

export default function Home() {
  return (
    <>
      <SideMenu />
      <Header />
      <main className={styles.main}>
        <section className={styles.firstSection}>
          <h1> Location et installation de tentes de réception sur mesure </h1>

          <figure className={styles.image}>
            <Image src={TentImage} alt="tent" fill={true} />
          </figure>

          <div className={styles.buttonPart}>
            <DevisButton className={styles.devisButton} />

            <Sun className={styles.sun} />
          </div>
        </section>

        <section className={styles.secondSection}>
          <figure>
            <blockquote>
              “C’est sous un chapiteau que j’ai vu se créer les plus beaux
              moments d’harmonie”
            </blockquote>

            <figcaption> Gabin, fondateur d’Inouze</figcaption>

            <ul>
              <li>Mariage</li>
              <li>Entreprise</li>
              <li>Collectivité</li>
              <li>Planner</li>
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

        <div className={styles.blueGradientBackground}>
          <Banner style="home" />

          <section className={styles.thirdSection}>
            <div className={styles.images}>
              <figure className={styles.image}>
                <Image src={TentImage} alt="tent" fill={true} />
              </figure>
              <figure className={styles.image}>
                <Image src={TentImage} alt="tent" fill={true} />
              </figure>
            </div>

            <p>
              Quel que soit votre événement, nos structures haut de gamme
              apportent une atmosphère unique et élégante à votre lieu.
            </p>

            <p>
              Quel que soit votre événement, nos structures haut de gamme
              apportent une atmosphère unique et élégante à votre lieu.
            </p>
          </section>

          <div className={styles.imageSection}>
            <figure className={styles.image}>
              <Image src={TentImage} alt="tent" fill={true} />
            </figure>

            <div className={styles.leftSection}>
              <Sun className={styles.sun} />
              <figure className={styles.image}>
                <Image src={TentImage} alt="tent" fill={true} />
              </figure>
            </div>
          </div>

          <HomeSlider />
          <Trust />
        </div>
      </main>

      <Footer />
    </>
  );
}
