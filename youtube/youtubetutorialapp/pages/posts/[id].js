import React from "react";
import { URL } from "../../environment";

const PostDetail = ({ post }) => {
  return (
    <div className="grid">
      <h3>{post.name}</h3>
      <br />
      <h4>{post.body}</h4>
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

export const getServerSideProps = async (context) => {
  const res = await fetch(`${URL}/api/posts/${context.params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default PostDetail;
