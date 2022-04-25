import styles from "../../styles/Ozkan.module.css";
import Link from "next/link";
//this function not gonna run in browser
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { ozkan: data },
  };
};

const Ozkan = ({ ozkan }) => {
  return (
    <div className={styles.main}>
      <h1>All Ozkan Files</h1>
      <p className={styles.text}>main directory for all Ozkan files</p>
      <p className={styles.text}>Fetching Data</p>
      {ozkan.map((user) => (
        <Link href={"/ozkan/" + user.id} key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ozkan;
