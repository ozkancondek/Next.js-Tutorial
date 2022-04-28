import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h3>Note index page</h3>
      <Link href="/notes/[id]" as={"/notes/all"}>
        <a>All Notes</a>
      </Link>
    </div>
  );
};

export default Page;
