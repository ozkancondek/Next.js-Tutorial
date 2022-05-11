import React from "react";

const UserDetail = ({ user }) => {
  return (
    <div className="grid">
      <h3>{user.name}</h3>
      <br />
      <h4>{user.email}</h4>
      <style jsx>
        {`
          .grid {
            width: 300px;
            margin-top: 5px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            flex-wrap: wrap;
            max-width: 800px;
            border-bottom: 2px solid grey;
          }
        `}
      </style>
    </div>
  );
};

// page created with user request
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
//   );
//   const user = await res.json();
//   return {
//     props: {
//       user,
//     },
//   };
// };

//all pages created before
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await res.json();
  const paths = users.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: false, // go to error page if i cant find localhost:300/user/45454545454dqw
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
};

export default UserDetail;
