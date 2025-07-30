import React from "react";

const SomeChildComponent = ({ data }) => {
  console.log("SomeChildComponent rendered");
  return (
    <div>
      <h2>Some Child Component {data}</h2>
    </div>
  );
};

export default React.memo(SomeChildComponent);
