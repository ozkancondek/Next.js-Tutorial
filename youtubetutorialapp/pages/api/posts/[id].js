import { posts } from "../../../posts";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const { id } = req.query;
  const post = posts.find((post) => post.id.toString() === id);
  console.log(post);

  post
    ? res.status(200).json(post)
    : res.status(200).json({ message: "Post not found" });
};
