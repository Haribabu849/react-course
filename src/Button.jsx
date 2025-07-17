import React from "react";

const Button = ({ btnName, anotherProp }) => {
  const styles = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    width: "100px",
    marginTop: "5px",
  };
  // console.log(props);
  // const { btnName, anotherProp } = props;
  return (
    <div>
      <button style={styles}>{btnName}</button>
    </div>
  );
};

export default Button;
