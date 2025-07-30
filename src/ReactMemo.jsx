import React, { useCallback } from "react";
import SomeChildComponent from "./SomeChildComponent";

const ReactMemo = () => {
  const [state, setState] = React.useState(0);
  console.log("ReactMemo rendered");
  const [anotherState, setAnotherState] = React.useState(0);
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, [anotherState]);
  //     function hanldeclick --- abc21123
  //   function handleclick --- abc21124
  //   function handleclick --- abc21125

  return (
    <div>
      <h1>React Memo Example</h1>
      <p>Current state: {state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>Change State</button>
      <SomeChildComponent data={state} onClick={handleClick} />
      <button onClick={() => setAnotherState((prev) => prev + 1)}>
        Change Another State {anotherState}
      </button>
    </div>
  );
};

export default ReactMemo;
