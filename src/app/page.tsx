import Footer from "@/components/structure/Footer/Footer";
import Header from "../components/structure/Header/Header";
import styles from "./page.module.scss";

import SideMenu from "@/components/structure/side-menu/SideMenu";
import Banner from "@/components/blocks/Banner/Banner";
import Trust from "@/components/blocks/Trust/Trust";
import FirstSection from "./home-components/FirstSection/FirstSection";
import SecondSection from "./home-components/SecondSection/SecondSection";

import ValueSlider from "../components/sections/ValueSlider/ValueSlider";
import { ResizeScript } from "@/components/ResizeScript";
import DevisButton from "@/components/items/Button/DevisButton";
import ImageWithCredit from "@/components/items/ImageWithCredit/ImageWithCredit";
import Illu2 from "@/assets/icons/illu2.svg?react";

import Montage from "@/assets/images/montage.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <ResizeScript />

      <Header style="home">
        <FirstSection />
        <DevisButton className={styles.devisButton} />
      </Header>
      <SideMenu topView className={styles.desktopSideMenu} />

      <SecondSection />

      <Banner style="home" />

      <div className={styles.desktopBottomSection}>
        <p className={`${styles.text} ${styles.firstText}`}>
          {`Parce que sous un chapiteau s’éveille toujours un soupçon de magie,
        Inouze vous propose ses structures haut de gamme pour donner une
        nouvelle dimension à votre événement.`}
        </p>

        <div className={styles.imageWrapper}>
          <ImageWithCredit
            src={Montage}
            alt="tent"
            className={styles.image}
            Icon={<Illu2 />}
          />
        </div>

        <div className={styles.bottomPart}>
          <p className={styles.text}>
            {`Quel que soit votre événement, nos structures haut de gamme apportent
        une atmosphère unique et élégante à votre lieu.`}
          </p>

          <p className={styles.text}>
            {`Pour un mariage, un événement d’entreprise, ou encore un festival,
        Inouze s’adapte à vos envies et vos besoins pour créer un cadre
        remarquable où tout devient possible.`}
          </p>

          <ValueSlider style="home" />
        </div>
      </div>
      <Trust style="home" className={styles.desktopHidden} />
      <Footer />
    </div>
  );
}
