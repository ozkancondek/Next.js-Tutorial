import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h3>index page</h3>
      <h4>Navigation</h4>
      <Link href="/notes">
        <a>Notes Page</a>
      </Link>
    </div>
  );
};

export default Page;
