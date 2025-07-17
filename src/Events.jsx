import React, { useState } from "react";

const Events = () => {
  //   let count = 0;
  //   const [count, setCount] = useState(0);
  const handleClick = (name) => {
    console.log("clicked");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  console.log("this is from event");
  return (
    <div>
      <button onClick={() => handleClick()}>click</button>
      <input type="text" onChange={handleChange} />
      <p onClick={handleClick}>some para</p>
      <p onMouseEnter={() => console.log("entered mouse")}>somedaasdpfsdf</p>
      {/* <h2>{count}</h2> */}
      {/* <button
        onClick={() => {
          setCount((prev) => prev + 1);
          console.log(count);
        }}
      >
        click to increase
      </button> */}
    </div>
  );
};

export default Events;
