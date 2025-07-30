import React from "react";
import useFetch from "./useFetch";

const CustomHook1 = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.c/users"
  );
  console.log(data);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      {data.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
};

export default CustomHook1;
