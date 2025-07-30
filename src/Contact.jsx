import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      This is contact Page
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Contact;
