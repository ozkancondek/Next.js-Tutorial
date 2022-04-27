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

import React from "react";
import Link from "next/link";

export default () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div>
      <h1>Notes</h1>

      {notes.map((note) => (
        <div>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};
