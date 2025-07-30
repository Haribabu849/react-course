import React, { useEffect, useRef, useState } from "react";

const RefContainer = () => {
  // useref is used to access DOM elements directly
  //
  const [state, setState] = useState("some data");
  let something = "something";
  const data = useRef(0);
  console.log(data, "use ref data");
  const someInputData = useRef(null);
  console.log(someInputData, "input ref data", someInputData?.current?.value);
  useEffect(() => {
    someInputData.current.focus();
  }, []);

  return (
    <div>
      <h1>RefContainer</h1>
      <p>This component is a placeholder for future content.</p>
      <p>Current state: {state}</p>
      <p>Something: {something}</p>
      {/* This button will toggle the state and log something */}
      <p>Ref value: {data.current}</p>
      <button
        onClick={() => {
          console.log("Button clicked");
          console.log(something);
          something = "changed";
          //   setState("data changed");
          data.current += 1; // Increment the ref value
          console.log(data.current);
        }}
      >
        clicked
      </button>
      <button onClick={() => setState("data changed")}> click this</button>
      <input type="text" ref={someInputData} className="form-control" />
    </div>
  );
};

export default RefContainer;
