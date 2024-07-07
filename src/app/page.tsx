import Footer from "@/components/structure/Footer/Footer";
import Header from "../components/structure/Header/Header";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}></main>

      <Footer />
    </>
  );
}
