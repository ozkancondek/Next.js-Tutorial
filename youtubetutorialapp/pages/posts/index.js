import { Postcard } from "../../components/PostCard";
import { URL } from "../../environment/index";

const Posts = ({ posts }) => {
  return (
    <div>
      <Postcard posts={posts} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${URL}/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
