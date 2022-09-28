import React, { useState } from "react";

export default function AddTask(props) {
  const [newTask, setNewTask] = useState("");
  const SecNewTask = () => {
    setNewTask("");
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Task Name..."
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button
        onClick={() => {
          props.AddTask(newTask, SecNewTask);
        }}
      >
        Add Task
      </button>
    </div>
  );
};
