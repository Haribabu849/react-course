import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = React.useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/login">Go to login</Link>
      <button onClick={() => navigate("/about")}>go to about</button>
      <button onClick={() => navigate("/data")}>go to data</button>
      <button onClick={() => navigate("/admin/dashboard")}>
        go to admin dashboard
      </button>
      <button onClick={() => navigate("/admin/settings")}>
        go to admin settings
      </button>

      {}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => navigate(`/posts/${post.id}`)}>
            open this post
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
