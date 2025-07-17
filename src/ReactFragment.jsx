import React from "react";

const ReactFragment = () => {
  return (
    <>
      <h2>this is heading</h2>
      <h2>this is anohter heading</h2>

      {["submit", "reset"].map((e, i) => {
        return (
          <React.Fragment key={i}>
            <button>{e}</button>
            <span>data</span>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ReactFragment;
