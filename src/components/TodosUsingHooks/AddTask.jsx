import React, { useState } from "react";

export default function AddTask(props) {
  const [newTask, setNewTaks] = useState("");
  const SecNewTask = () => {
    setNewTaks("");
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="დავალების სახელი..."
        onChange={(e) => setNewTaks(e.target.value)}
        value={newTask}
      />
      <button
        onClick={() => {
          props.AddTask(newTask, SecNewTask);
        }}
      >
        დამატება
      </button>
    </div>
  );
};
