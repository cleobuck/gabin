import Header from "../components/Header";
import styles from "./page.module.css";
import "../assets/styles/globalStyles.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}></main>
    </>
  );
}
