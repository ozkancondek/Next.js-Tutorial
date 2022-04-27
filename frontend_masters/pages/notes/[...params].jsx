import React from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  //const { id } = router.query;
  //change file name from [id] to [...params]
  const { params } = router.query;
  console.log(params);
  // console.log(router.query); {id: '45'}
  // return <div>Entered parameter is: {id}. Return back to home</div>;
  return <div>Note </div>;
};

export default Page;
