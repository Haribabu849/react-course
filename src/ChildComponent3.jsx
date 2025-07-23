import { useContext } from "react";
import { UserContext } from "./ContexApi";

const ChildComponent3 = () => {
  const { user, banana } = useContext(UserContext);
  console.group(user, banana);
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{banana}</h2>
    </div>
  );
};

export default ChildComponent3;
