import React, { useEffect, useState } from "react";

const SomeEffect = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);
  useEffect(() => {
    console.log("amar");
    document.title = "about";
    function handleResize() {
      console.log("window resized", window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    const timer = setInterval(() => {
      // setCount((prev) => prev + 1);
      console.log("interval for 2sec");
    }, 2000);

    return () => {
      console.log("before destroy");
      document.title = "vite+react";
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      {count}

      <button onClick={() => setCount((prev) => prev + 1)}>increse</button>
      {anotherCount}

      <button onClick={() => setAnotherCount((prev) => prev + 1)}>
        increse
      </button>
    </div>
  );
};

export default SomeEffect;
