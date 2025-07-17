import React from "react";
import Styles from "./Styles";

// to use javascript in react use {}

const Javascript = () => {
  let firstName = "Hari";
  //   return React.createElement(
  //     "div",
  //     {},
  //     React.createElement(
  //       "p",
  //       {},
  //       "This is ",
  //       React.createElement("i", {}, "Hari"),
  //       "!"
  //     )
  //   );

  return <div>Hi this is {firstName ? firstName.toUpperCase() : "guest"}</div>;
};

export default Javascript;
