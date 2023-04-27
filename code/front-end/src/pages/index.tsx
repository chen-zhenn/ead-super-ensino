import Head from "next/head";
import Image from "next/image";
import Disciplinas from "./Disciplinas";

import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Disciplinas />
      <Head>
        <title>EAD - Super Ensino Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>EAD - Super Ensino Web App</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
