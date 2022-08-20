import React from "react";

export default function Task(props) {
  return (
    <li key={props.id}>
      <input
        type="checkbox"
        className="checkbox"
        onClick={(e) => props.isChecked(e.target.checked, props.name)}
      />
      <input
        type="checkbox"
        className="checkbox"
        defaultChecked={props.completed}
        onChange={props.taskCompleted}
      />
      {props.completed === true ? (
        <span className="taskName strike">{props.name}</span>
      ) : (
        <div className="taskName">{props.name}</div>
      )}

      <div className="taskSwitch">
        <span
          className="nav"
          onClick={() => props.taskChangePosition(props.id, "+")}
        >
          <button>+</button>
        </span>
        <span
          className="nav"
          onClick={() => props.taskChangePosition(props.id, "-")}
        >
          <button>-</button>
        </span>
      </div>
      <span className="buttonContainer">
        <button onClick={() => props.removeTask(props.id)}>Remove</button>
        <button onClick={() => props.edit(props.name, props.id)}>
        Edit
        </button>
      </span>
    </li>
  );
}
