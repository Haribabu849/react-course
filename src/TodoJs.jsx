import React, { useState } from "react";
import SearchData from "./searchData";
import AddData from "./AddData";

const TodoJs = () => {
  const [task, setTask] = useState("");
  let todos1 = [
    { id: 1, text: "go for a run", completed: true, priority: "low" },
    { id: 2, text: "build a website", completed: true, priority: "high" },
  ];

  const [todos, setTodos] = useState(todos1);
  const [isEditing, setIsEditing] = useState(false);
  const [select, setSelect] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  //   const [selectedObject, setSelectedObject] = useState({});
  const [selectPriority, setSelectPriority] = useState("low");
  const [selectPriority2, setSelectPriority2] = useState("all");
  const [submitData, setSubmitData] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        text: task,
        completed: false,
        priority: selectPriority,
      },
    ]);
    setTask("");
    setIsEditing(false);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((e) => e.id !== id));
  };
  const handleReset = () => {
    setTodos([]);
  };

  const markAsCompleted = (id) => {
    setTodos((prev) =>
      prev.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e))
    );
  };

  const editFunctionality = (id) => {
    setIsEditing(true);
    let element = todos.find((e) => e.id === id);
    setSelectedId(id);
    // setSelectedObject(element);
    setTodos((prev) => prev.filter((e) => e.id !== id));
    setTask(element.text);
    setSelect(element.completed);
    setSelectPriority(element.priority);
  };
  //   const handleChange = (e) => {
  //     const value = e.target.value;
  //   };

  const handleEdit = () => {
    setTodos([
      ...todos,
      {
        id: selectedId,
        text: task,
        completed: select === true ? true : false,
        priority: selectPriority,
      },
    ]);

    setIsEditing(false);
  };

  const handleSearch = (searchInput) => {
    // setSearchInput("");
    setSubmitData(searchInput);
  };

  let filteredTodos =
    selectPriority2 === "all"
      ? todos
      : todos.filter((e) => {
          return e.priority === selectPriority2;
        });

  let searchTodos = filteredTodos.filter((e) => {
    return e.text.includes(submitData);
  });
  // console.log(searchInput);
  console.log("parent component");

  let globalSearchData = todos.filter((e) => {
    return e.text.includes(globalSearch);
  });

  return (
    <div>
      <h2>Todo App</h2>{" "}
      <input
        type="search"
        value={globalSearch}
        onChange={(e) => setGlobalSearch(e.target.value)}
      />
      <br />
      <br />
      {!globalSearch && (
        <div>
          <span>filter by priority</span>
          <select
            value={selectPriority2}
            onChange={(e) => setSelectPriority2(e.target.value)}
          >
            <option value="all">all</option>

            {["low", "medium", "high"].map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
          <SearchData handleSearch={handleSearch} />

          <div>
            <AddData
              isEditing={isEditing}
              onAdd={addTodo}
              onEdit={handleEdit}
              task={task}
              setTask={setTask}
              selectPriority={selectPriority}
              setSelectPriority={setSelectPriority}
            />

            {isEditing && (
              <select
                name=""
                id=""
                onChange={(e) => setSelect(e.target.value)}
                value={select}
              >
                {["completed", "incomplete"].map((e, i) => (
                  <option value={e === "completed" ? true : false} key={i}>
                    {e}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      )}
      <ul>
        {!globalSearch ? (
          searchTodos.length > 0 ? (
            searchTodos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>{" "}
                <button onClick={() => deleteTodo(todo.id)}>delete</button>{" "}
                <button
                  onClick={() => editFunctionality(todo.id)}
                  disabled={isEditing}
                >
                  edit
                </button>{" "}
                {!todo.completed ? (
                  <button onClick={() => markAsCompleted(todo.id)}>
                    mark as completed
                  </button>
                ) : (
                  <span>✅</span>
                )}
                <span>{todo.priority}</span>
              </li>
            ))
          ) : (
            <span>no tasks</span>
          )
        ) : globalSearchData.length > 0 ? (
          globalSearchData?.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>{" "}
              <button onClick={() => deleteTodo(todo.id)}>delete</button>{" "}
              <button
                onClick={() => editFunctionality(todo.id)}
                disabled={isEditing}
              >
                edit
              </button>{" "}
              {!todo.completed ? (
                <button onClick={() => markAsCompleted(todo.id)}>
                  mark as completed
                </button>
              ) : (
                <span>✅</span>
              )}
              <span>{todo.priority}</span>
            </li>
          ))
        ) : (
          <span>no tasks globally</span>
        )}
      </ul>
    </div>
  );
};

export default TodoJs;
