export const homePage = (req, res) => {
  res.send("this is HOME PAGE!");
};

export const fetchPosts = (req, res) => {
  res.status(200).json([
    {
      title: " new post",
      user: "Ameer",
      likes: 100,
    },
    {
      title: " new post",
      user: "Ayman",
      likes: 700,
    },
    {
      title: " new post",
      user: "Ameen",
      likes: 200,
    },
    {
      title: " new post",
      user: "Mohammed",
      likes: 200,
    },
  ]);
};
