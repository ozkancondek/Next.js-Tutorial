import { UserCard } from "../../components/UserCard";

const Users = ({ users }) => {
  return (
    <div>
      <UserCard users={users} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default Users;
