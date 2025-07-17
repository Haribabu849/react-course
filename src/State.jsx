import React, { useState } from "react";
import Events from "./Events";

// useState hook

// State= memory of a component -- component remeber and update values over time
const State = () => {
  //   console.log(useState(10));
  const [count, setCount] = React.useState(0);
  //   console.log(count, setCount);
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState({
    name: "Hari",
    age: 25,
    dept: "It",
    hobbies: [1, 2, 34],
  });

  const [isVisible, setIsVisible] = useState(true);

  const [fruits, setFruits] = useState(["apple", "orange"]);
  const [tab, setTab] = useState(1);

  //   let count = 1;

  const handleIncrease = () => {
    setCount();
    setCount((prev) => prev + 1);
  };
  console.log(count, inputValue);

  const handleAddFruit = () => {
    setFruits((prevState) => [...prevState, "banana"]);
  };
  console.log(tab);
  return (
    <div>
      <h1>heading 21</h1>
      <button onClick={handleIncrease}>click to increase</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        click to decrease
      </button>
      <button onClick={() => setCount(0)}>click to reset</button>
      <button onClick={() => setCount(count + 2)}>increase by two</button>
      <button
        onClick={() => {
          setCount(Number(inputValue) + count);
          //   setInputValue("");
        }}
      >
        increase by somevalue
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        {user.name} is {user.age} {user.dept}
      </p>
      <button
        onClick={() =>
          setUser({ ...user, name: "hari babu", dept: "HR", age: 29 })
        }
      >
        change namge
      </button>

      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "show"}
      </button>
      <p>{isVisible && "i am visible"}</p>
      <button onClick={handleAddFruit}>add banana</button>
      {fruits.map((e, i) => (
        <p key={i}>{e}</p>
      ))}

      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ background: `${tab >= 1 ? "blue" : ""}` }}>
            first step
          </span>
          <span style={{ background: `${tab >= 2 ? "blue" : ""}` }}>
            second step
          </span>
          <span style={{ background: `${tab >= 3 ? "blue" : ""}` }}>
            final step
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "yellow",
          }}
        >
          {tab === 1 && <p>submit data</p>}
          {tab === 2 && <p>please check your data</p>}
          {tab === 3 && (
            <p>
              confirm submision <button>confirm</button>
            </p>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={() => {
              if (tab === 1) return;

              setTab((tab) => tab - 1);
            }}
            disabled={tab === 1 ? true : false}
          >
            prev
          </button>
          <button
            onClick={() => {
              if (tab === 3) return;
              setTab((tab) => tab + 1);
            }}
            disabled={tab === 3 ? true : false}
          >
            next
          </button>
        </div>
      </div>
      <Events />
    </div>
  );
};

export default State;
