import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/parent">Parent</NavLink>
      <NavLink to="/parent/child">Child</NavLink>
      <NavLink to="/parent/child/child2">Child2</NavLink>
      <NavLink to="/parent/child/child3">Child2</NavLink>
    </div>
  );
};

export default Navbar;
