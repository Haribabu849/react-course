import React, { useMemo } from "react";

const Memo = () => {
  const [count, setCount] = React.useState(0);
  const [num, setNum] = React.useState(5);
  const something = useMemo(() => {
    let j = 0;
    for (let i = 0; i < 100000; i++) {
      // Simulating an expensive calculation
      console.log(i);
      j += i;
    }
    console.log("Expensive calculation done");
    return j;
  }, [num]);
  //   function data() {
  //     let j = 0;
  //     for (let i = 0; i < 100000; i++) {
  //       // Simulating an expensive calculation
  //       console.log(i);
  //       j += i;
  //     }
  //     console.log("Expensive calculation done");
  //     return j;
  //   }
  //   const something = data();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Re-render :{count}</button>
      {/* <ExpensiveComponent num={num} /> */}
      <button onClick={() => setNum(num + 1)}>Change Num :{num}</button>
      <p>Something: {something}</p>
    </div>
  );
};

// function ExpensiveComponent({ num }) {
// //   const squared = useMemo(() => {
// //     console.log("Calculating square...");
// //     return num * num;
// //   }, [num]);
//   //   const squared = num * num; // Simulating an expensive calculation
//   //   console.log(squared);

//   console.log("Expensive Component Rendered");
//   return <div>square {squared}</div>;
// }

export default Memo;
