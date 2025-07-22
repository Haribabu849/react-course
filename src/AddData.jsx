import React from "react";

const AddData = ({
  isEditing,
  setTask,
  onEdit,
  task,
  selectPriority,
  setSelectPriority,
  onAdd,
}) => {
  //   const [task, setTask] = React.useState("");
  //   const [selectPriority, setSelectPriority] = React.useState("low");
  //   const handleInputChange = (e) => {
  //     setTask(e.target.value);
  //   };
  return (
    <>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task ..."
        value={task}
      />
      {!isEditing ? (
        <button type="button" onClick={() => onAdd()}>
          Add
        </button>
      ) : (
        <button
          onClick={() => {
            onEdit();
          }}
        >
          edit
        </button>
      )}
      <select
        name=""
        id=""
        value={selectPriority}
        onChange={(e) => setSelectPriority(e.target.value)}
      >
        {["low", "medium", "high"].map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    </>
  );
};

export default AddData;
