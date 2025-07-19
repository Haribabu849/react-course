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

// props can be passed from parent to child
const App = () => {
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
      <TodoJs />
    </div>
  );
};

export default App;
