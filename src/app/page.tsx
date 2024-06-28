import Footer from "@/components/Footer/Footer";
import Header from "../components/Header/Header";
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
