import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.container}>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </div>
  </div>
);

export default Home;
