import axios from "axios";
import React, { useEffect, useState } from "react";

const Datafetching = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await axios.get("http://localhost:3000/");
      const data = await response.data;
      console.log(data);
      setusers(data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <h2>users </h2>
      {users.length > 0 &&
        users.map((user) => <h2 key={user.id}>{user.id}</h2>)}
    </div>
  );
};

export default Datafetching;
