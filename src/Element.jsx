import React from "react";
import { Outlet } from "react-router-dom";

const Element = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Element;
