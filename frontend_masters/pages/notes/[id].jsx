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

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {id} </h1>
    </div>
  );
};
