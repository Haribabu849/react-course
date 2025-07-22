import React from "react";
import Styles from "./Styles";
import Javascript from "./Javascript";
import Button from "./Button";
import UserListComponent from "./UserListComponent";
import ConditionalRendering from "./ConditionalRendering";
import ReactFragment from "./ReactFragment";
import Events from "./Events";
import State from "./State";
import FormState from "./FormState";
import TodoJs from "./TodoJs";
import "./styles.css";
import Some from "./Some";
import Effect from "./Effect";
import SomeEffect from "./SomeEffect";
import Datafetching from "./datafetching";
import TodoApplication from "./TodoApplication";

// props can be passed from parent to child
const App = () => {
  const [state, setState] = React.useState(false);
  let arr = [
    { name: "hari", age: 22, id: 1, dept: "IT" },
    { name: "Manoj", age: 21, id: 2, dept: "manager" },
    { name: "hari", age: 23, id: 3, dept: "HR" },
  ];
  // console.log(arr);
  return (
    <div>
      {/* <Styles /> */}
      {/* <Javascript /> */}
      {/* to create list use map method */}
      {/* {arr.map((e) => {
        // const { id, name, age } = e;
        return <UserListComponent {...e} key={e.id} />;
      })} */}
      {/* {[<Button btnName={"submit"} />, <Button btnName={"reset"} />]} */}
      {/* <ConditionalRendering /> */}
      {/* <ReactFragment /> */}
      {/* <Events /> */}
      {/* <State /> */}
      {/* <FormState /> */}
      {/* <TodoJs /> */}
      {/* <Some name="hari">
        <button style={{ color: "red" }}>click emoji2</button>
      </Some>
      <Some name="manoj">
        <button style={{ color: "green" }}>click emoji1</button>
        <span>span text</span>
      </Some> */}
      {/* <button onClick={() => setState(!state)}>click</button>
      {state && <Effect />} */}
      {/* {state && <Datafetching />}
      <button type="button" onClick={() => setState(!state)}>
        toggle
      </button> */}
      <TodoApplication />
    </div>
  );
};

export default App;
