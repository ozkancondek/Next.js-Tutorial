// import React from "react";
// import { useRouter } from "next/router";

// const Page = () => {
//   const router = useRouter();
//   //const { id } = router.query;
//   //change file name from [id] to [...params]
//   const { params } = router.query; //returns array
//   console.log(params);
//   // console.log(router.query); {id: '45'}
//   // return <div>Entered parameter is: {id}. Return back to home</div>;
//   return <div>Note </div>;
// };

// export default Page;

// pages/[id].jsx
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import Link from "next/link";

export default ({ note }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {note.title} </h1>
    </div>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}
