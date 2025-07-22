import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoApplication = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userage, setUserage] = useState("");
  const [userName, setUserName] = useState("");
  const [userDept, setUserDept] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  //   const [confirmUpdate, setConfirmUpdate] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [id, setId] = useState(null);
  const [message, setMessage] = useState("");
  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await axios.get("http://localhost:3000/");
      const data = await response.data;
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    setIsEditing(true);
    let element = users.find((e) => e.id === id);
    setId(id);

    setUsers((prev) => prev.filter((e) => e.id !== id));
    setUserName(element.name);
    setUserage(element.age);
    setUserDept(element.dept);
  };

  const handleUpdate = () => {
    const updateData = async () => {
      try {
        const response = await axios.put(
          `http://localhost:3000/${id}`,
          JSON.stringify({ name: userName, age: userage, dept: userDept }),
          { headers: { "Content-Type": "application/json" } }
        );

        const data = await response.data;
        console.log(data);
        // setUsers([
        //   ...users,
        //   {
        //     id: id,
        //     name: userName,
        //     age: userage,
        //     dept: userDept,
        //   },
        // ]);
        setIsEditing(false);
        setUserName("");
        setUserage("");
        setUserDept("");
        setId(null);
        setIsAdding(false);
        fetchData();
      } catch (error) {
        console.log(error.message);
      }
    };
    updateData();
  };

  const handleUserAdd = async () => {
    if (!userName || !userage || !userDept) return;
    try {
      const response = await axios.post(
        "http://localhost:3000/",
        JSON.stringify({ name: userName, age: userage, dept: userDept }),
        { headers: { "Content-Type": "application/json" } }
      );
      const data = await response.data;
      console.log(data);
      setIsEditing(false);
      setIsAdding(false);
      setUserName("");
      setUserage("");
      setUserDept("");
      setId(null);

      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleAdd = () => {
    setIsAdding(!isAdding);
  };

  const handleDelete = (id) => {
    const deleteData = async () => {
      try {
        const response = await axios.delete(`http://localhost:3000/${id}`);
        const data = await response.data;
        console.log(data);
        setMessage(data.message);
        fetchData();
      } catch (error) {
        console.log(error.message);
      }
    };
    deleteData();
  };

  if (isLoading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div style={{ border: "2px solid black" }}>
      <h2>Todo Application</h2>
      <h1>{message}</h1>
      <button onClick={handleAdd}>create new user</button>
      {(isEditing || isAdding) && (
        <div>
          <label htmlFor="">username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <label>age</label>
          <input
            type="number"
            value={userage}
            onChange={(e) => setUserage(e.target.value)}
          />
          <br />
          <label htmlFor="">dept</label>
          <input
            type="text"
            value={userDept}
            onChange={(e) => setUserDept(e.target.value)}
          />
          {isAdding ? (
            <button onClick={() => handleUserAdd()}>add</button>
          ) : (
            <button onClick={() => handleUpdate()}>update</button>
          )}
        </div>
      )}
      {users.length > 0 &&
        users.map((user) => (
          <div style={{ border: "2px solid red", background: "cyan" }}>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h3>{user.dept}</h3>
            <button onClick={() => handleDelete(user.id)}>delete</button>
            <button onClick={() => handleEdit(user.id)}>edit</button>
          </div>
        ))}
    </div>
  );
};

export default TodoApplication;
