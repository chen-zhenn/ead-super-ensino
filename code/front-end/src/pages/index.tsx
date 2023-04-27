import Head from "next/head";
import Image from "next/image";
import Disciplinas from "./Disciplinas";

import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EAD - Super Ensino Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        justifyContent:'flex-start', 
        marginRight:'auto', paddingTop:'0.625rem'}}>
        <Disciplinas />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
