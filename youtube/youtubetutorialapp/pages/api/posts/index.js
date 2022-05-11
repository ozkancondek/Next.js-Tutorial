import { posts } from "../../../posts";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  res.status(200).json(posts);
};
