import React from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  // console.log(router.query); {id: '45'}
  return <div>Note {id}</div>;
};

export default Page;
