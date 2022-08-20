import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddTask from "./AddTask";
import Logo from "../../resource/logo.gif";
import Task from "./Task";
import RemoveTasks from "./RemoveTasks";
import { TaskItems } from "../../utils/taskItems";

export default function ToDoTasks() {
  const [tasks, setTasks] = useState(TaskItems);
  const [errorMessage, setErrorMessage] = useState("");
  const [editName, setEditName] = useState("");
  const [editId, setEditId] = useState("");

  const addNewTask = (name, emptyValue) => {
    if (name.length === 0 && name === "") {
      setErrorMessage("Please input Task name...");
      return;
    }
    const EmptyValue = tasks.some(() => name.trim().length === 0);
    if (EmptyValue) {
      setErrorMessage("You can't create Taske with empty symbol...");
      return;
    }
    const DublicateValue = tasks.some((task) => task.name === name);
    if (DublicateValue) {
      setErrorMessage("This Task Name exist...");
      return;
    }
    let newToDo = { name };
    if (tasks.length === 0) {
      newToDo.id = 1;
    } else {
      newToDo.id = tasks[tasks.length - 1].id + 1;
    }

    setTasks([...tasks, newToDo]);
    setErrorMessage("");
    emptyValue();
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const clearAllTask = () => {
    setTasks([]);
  };

  const removeAllCompletedTask = () => {
    const newTasks = tasks.filter((task) => task.completed === false);
    setTasks(newTasks);
  };

  const removeCheckboxedTask = () => {
    const newTasks = tasks.filter((task) => task.isChecked !== true);
    setTasks(newTasks);
  };

  const taskCompleted = (id) => {
    const newTodos = [...tasks];
    newTodos.forEach((e) => {
      if (e.id === id) {
        e.completed = !e.completed;
        setTasks([...newTodos]);
      }
    });
  };
  const save = () => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id === editId) {
        task.name = editName;
      }
      newTasks.push(task);
    });
    setTasks(newTasks, "", "");
  };
  const edit = (name, id) => {
    setEditName(name);
    setEditId(id);
  };
  const isChecked = (value, text) => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.name === text) {
        task.isChecked = value;
      }
      newTasks.push(task);
    });
    setTasks(newTasks);
  };
  const taskChangePosition = (id, position) => {
    const newTasks = [...tasks];
    tasks.forEach((e, index) => {
      let check;
      let newIndex;
      if (position === "+") {
        check = index !== 0;
      } else if (position === "-") {
        check = index !== newTasks.length - 1;
      }
      if (check && e.id === id) {
        const newOne = newTasks.splice(index, 1);
        newIndex = position === "-" ? index - 1 : index - 1 + 2;
        newTasks.splice(newIndex, 0, newOne[0]);
      }
      return setTasks([...newTasks]);
    });
  };

  return (
    <div>
      <span className="onTheHeader">{"useState ==> Hook Components :)"}</span>
      <h1 className="header">
        <img src={Logo} alt="logoImg" />
        Tasks List
      </h1>
      <div className="errorMessage">{errorMessage}</div>

      <AddTask AddTask={addNewTask} />

      {tasks.length === 0 && <h2>Tasks List is empty...</h2>}
      {tasks.length !== 0 && (
        <ul>
          {tasks.length !== 0 && (
            <RemoveTasks
              removeAllCompletedTask={removeAllCompletedTask}
              deleteAllTask={clearAllTask}
              removeCheckboxedTask={removeCheckboxedTask}
            />
          )}
          {tasks.map((task) => (
            <div key={task.id}>
              <Task
                id={task.id}
                name={task.name}
                completed={task.completed}
                taskCompleted={() => {
                  taskCompleted(task.id);
                }}
                isChecked={isChecked}
                removeTask={removeTask}
                taskChangePosition={taskChangePosition}
                edit={edit}
              />

              {editName !== "" && editId === task.id && (
                <div>
                  <input
                    type="text"
                    onChange={(e) => setEditName(e.target.value)}
                    value={editName}
                  />
                  <div>
                    <button onClick={save}>Save</button>
                    <button onClick={() => setEditName("", "")}>
                    Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>
      )}
            <div className="nav">
          <button>
            <Link to="/">Main Page</Link>
          </button>
        </div>
    </div>
  );
}
