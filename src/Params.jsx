import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

const Params = () => {
  const [post, setPost] = React.useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, [id]);
  // console.log(params);
  return (
    <div>
      <h1>Post Details</h1>
      <h2 style={{ color: "red" }}>{post.title}</h2>
      <p style={{ color: "green", fontStyle: "italic" }}>{post.body}</p>
      <p>{post.id}</p>
    </div>
  );
};

export default Params;
