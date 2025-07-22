import React, { useEffect } from "react";

const Effect = () => {
  const [state, setState] = React.useState(0);
  const [anotherState, setAnotherState] = React.useState(0);
  const [data1, setData1] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [userData, setUserData] = React.useState(1);
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      //   await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setData1(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      //   setLoading(false);
    }
  };
  const fetchUserData = async (id) => {
    try {
      setLoading(true);
      setError(null);
      //   await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!response.ok) {
        throw new Error("An error occurred while fetching user data");
      }
      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      console.log("cleanup function");
    };
  }, [id]); //when component mounts

  useEffect(() => {
    console.log("This runs after every render");
  }, []);
  console.log(data1);

  console.log("rendering");
  //   if (loading) {
  //     return <h1>Loading...</h1>;
  //   }

  const handleclick = (id) => {
    fetchUserData(id);
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>{state}</h1>
      <h1>{anotherState} </h1>

      <button onClick={() => setState((prev) => prev + 1)}>click me </button>
      <button
        onClick={() => handleclick()}
        className={`${state ? "someclass" : "someother calss"}`}
      >
        click me to set another state
      </button>
      <label htmlFor=""></label>

      {userData && <h1>{userData.p}</h1>}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data1
          ?.filter((item) => item.id)
          .map((item) => (
            <>
              <h2 key={item.id}>
                {item.id} {item.name.toUpperCase()} {item.website}
              </h2>
              <button onClick={() => handleclick(item.id)}>
                {state ? "add" : "edit"}
              </button>
            </>
          ))
      )}
    </div>
  );
};

export default Effect;
