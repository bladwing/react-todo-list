import React from "react";

export default function RemoveTasks(props) {
  return (
    <div>
      <button onClick={() => props.deleteAllTask()}>
        ყველა დავალების წაშლა
      </button>
      <button onClick={() => props.removeAllCompletedTask()}>
        ყველა დასრულებული დავალების წაშლა
      </button>
      <button onClick={() => props.removeCheckboxedTask()}>
        მონიშნული დავალებების წაშლა
      </button>
    </div>
  );
}
