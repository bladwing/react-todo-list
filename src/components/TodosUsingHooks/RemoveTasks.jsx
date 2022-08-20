import React from "react";

export default function RemoveTasks(props) {
  return (
    <div>
      <button onClick={() => props.deleteAllTask()}>Remove all Tasks</button>
      <button onClick={() => props.removeAllCompletedTask()}>
        Remove all finished Tasks
      </button>
      <button onClick={() => props.removeCheckboxedTask()}>
        Remove Checked Tasks
      </button>
    </div>
  );
}
