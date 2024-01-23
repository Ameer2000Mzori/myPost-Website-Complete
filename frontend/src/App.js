import { useEffect, useState } from "react";

function App() {
  const [posts, SetPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/all/posts");
      const data = await response.json();
      console.log(data);
      SetPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>posts List</h1>
      <ul>
        {posts.map((post) => (
          <div key={post.id} className="post-Wrap">
            <p>{post.title}</p>
            <h4>{post.user}</h4>
            <p>{post.likes}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
