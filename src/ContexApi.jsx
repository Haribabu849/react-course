import React, { createContext, useState } from "react";
import ChildComponent from "./ChildComponent";

export const UserContext = createContext();

const ContexApi = () => {
  const [user, setUser] = useState({ name: "Hari", age: 25 });
  let banana = "banana";

  return (
    <UserContext.Provider value={{ user, banana }}>
      <div>
        <ChildComponent />
        <button onClick={() => setUser({ name: "Manoj", age: 24 })}>
          click to change User Data
        </button>
      </div>
    </UserContext.Provider>
  );
};

export default ContexApi;

// usereducer,useRef,useMemo,useCallback,React.Memo,reactrouter,redux,reduxtoolkit
