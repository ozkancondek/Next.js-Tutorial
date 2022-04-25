import Link from "next/link";
import styles from "../../styles/Ozkan.module.css";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false, //for an unrelated id
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: {
      user: data,
    },
  };
};
const Details = ({ user }) => {
  return (
    <div className={styles.detail}>
      <h1>Details Page for User</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
      <Link href="/ozkan">
        <a className={styles.btn}>Back to List</a>
      </Link>
    </div>
  );
};

export default Details;
