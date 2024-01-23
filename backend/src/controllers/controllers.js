// our posts data
const postsData = [
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
];

// home page
export const homePage = (req, res) => {
  res.send("this is HOME PAGE!");
};

// postsdata  or show posts
export const fetchPosts = (req, res) => {
  res.status(200).json(postsData);
};

// create post
export const createPost = (req, res) => {
  let { title, user, likes } = req.body;
  const newPost = {
    id: Math.random().toString(26).slice(2),
    title,
    user,
    likes,
  };
  // push the post
  postsData.push(newPost);
  console.log(`new post that was added`, newPost);
  console.log(`our posts object`, postsData);
};
