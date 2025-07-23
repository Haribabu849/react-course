import { useContext } from "react";
import ChildComponent3 from "./ChildComponent3";
import { UserContext } from "./ContexApi";

const ChildComponent2 = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <h1 style={{ color: "red" }}>{data.user.name}</h1>
      <ChildComponent3 />
    </div>
  );
};

export default ChildComponent2;
