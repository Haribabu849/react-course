import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ color: "red" }}>
      The page you are looking for does not exist.
      <button onClick={() => navigate("/")}>go to home</button>
    </div>
  );
};

export default NotFound;
