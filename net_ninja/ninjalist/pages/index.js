import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dolor!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dolor!
      </p>

      <Link href="/ozkan">
        <a className={styles.btn}>See Ozkan Listing</a>
      </Link>
    </div>
  );
}
