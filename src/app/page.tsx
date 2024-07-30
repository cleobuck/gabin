import Footer from "@/components/structure/Footer/Footer";
import Header from "../components/structure/Header/Header";
import styles from "./page.module.scss";

import SideMenu from "@/components/structure/side-menu/SideMenu";
import Banner from "@/components/blocks/Banner/Banner";
import Trust from "@/components/blocks/Trust/Trust";
import FirstSection from "./home-components/FirstSection/FirstSection";
import SecondSection from "./home-components/SecondSection/SecondSection";
import ThirdSection from "./home-components/ThirdSection/ThirdSection";
import FourthSection from "./home-components/FourthSection/FourthSection";
import ValueSlider from "../components/sections/ValueSlider/ValueSlider";

export default function Home() {
  return (
    <>
      <SideMenu className={styles.mobileSideMenu} />
      <Header />
      <main className={styles.main}>
        <FirstSection />

        <SideMenu topView className={styles.desktopSideMenu} />

        <SecondSection />
        <div className={styles.blueGradientBackground}>
          <Banner style="home" />

          <ThirdSection />
          <FourthSection />

          <ValueSlider style="home" />

          <Trust />
        </div>
      </main>
      <Footer />
    </>
  );
}
