import React from "react";
import Link from "next/link";

export const Postcard = ({ posts }) => {
  return (
    <div className="container">
      <h2>All Posts</h2>
      {posts.map((post) => {
        return (
          <div className="grid" key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.email}</a>
            </Link>
          </div>
        );
      })}
      <style jsx>
        {`
          .grid {
            width: 300px;
            margin-top: 5px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            max-width: 800px;
            border-bottom: 2px solid grey;
          }
          .container {
            border: 2px solid grey;
            padding: 10px;
            width: 320px;
          }
        `}
      </style>
    </div>
  );
};
