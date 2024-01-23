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
      <h1>Video List</h1>
      <ul>
        {posts.map((post, index) => (
          <p key={index}>{post.title}</p>
        ))}
      </ul>
    </div>
  );
}

export default App;
