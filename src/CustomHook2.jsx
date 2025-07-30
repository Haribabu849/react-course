import React from "react";
import useFetch from "./useFetch";

const CustomHook2 = () => {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  return <div>{data.map((post) => post.title)}</div>;
};

export default CustomHook2;
