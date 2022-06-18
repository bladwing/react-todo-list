import React from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import RemoveTasks from "./RemoveTasks";
import { TaskItems } from "./TaskItems";

class ToDoTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      tasks: TaskItems,
    };
  }

  AddTask = (name, emptyValue) => {
    if (name.length === 0 && name === "") {
      this.setState({
        errorMessage: "გთხოვთ შეიყვანეთ დავალების სახელი...",
      });
      return;
    }
    const DublicateValue = this.state.tasks.some((task) => task.name === name);
    if (DublicateValue) {
      this.setState({
        errorMessage: "მასეტი დავალების სახელი უკვე არსებობს...",
      });
      return;
    }

    let newToDo;
    if (this.state.tasks.length === 0) {
      newToDo = {
        id: 1,
        name: name,
      };
    } else {
      newToDo = {
        id: this.state.tasks[this.state.tasks.length - 1].id + 1,
        name: name,
      };
    }
    this.setState({
      tasks: [...this.state.tasks, newToDo],
      errorMessage: "",
    });
    emptyValue();
  };

  removeTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  deleteAllTask = () => {
    this.setState({
      tasks: [],
    });
  };

  removeAllCompletedTask = () => {
    this.setState({
      errorMessage: "ფუნქცია ჯერ არ არსებობს :(",
    });
  };
  taskCompleted = (id) => {
    console.log("hello", id);
  };

  edit = (text, id) => {
    this.setState({ editName: text, editId: id });
  };

  save = () => {
    let newTasks = [];
    this.state.tasks.forEach((task) => {
      if (task.id === this.state.editId) {
        task.name = this.state.editName;
      }
      newTasks.push(task);
    });
    this.setState({
      tasks: newTasks,
      editId: "",
      editName: "",
    });
  };

  taskSwitch = (id, direction) => {
    let checkIndex = false;
    let newTasks = this.state.tasks;
    for (let index = 0; index < newTasks.length; index++) {
      if (direction === "+") {
        checkIndex = index !== 0 ? true : false;
      }
      if (direction === "-") {
        checkIndex = index !== newTasks.length - 1 ? true : false;
      }
      if (newTasks[index].id === id && checkIndex) {
        let swapIndex = direction === "+" ? index - 1 : index + 1;
        let tmpTodo = newTasks[index];
        newTasks[index] = newTasks[swapIndex];
        newTasks[swapIndex] = tmpTodo;
        break;
      }
    }
    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    return (
      <div>
        <h1 className="header">დავალებების სია</h1>
        <div className="errorMessage">{this.state.errorMessage}</div>

        <AddTask AddTask={this.AddTask} />

        {this.state.tasks.length === 0 && <h2>დავალებების სია ცარიალია...</h2>}
        {this.state.tasks.length !== 0 && (
          <ul>
            {this.state.tasks.length !== 0 && (
              <RemoveTasks
                removeAllCompletedTask={this.removeAllCompletedTask}
                deleteAllTask={this.deleteAllTask}
              />
            )}

            {this.state.tasks.reverse().map((task) => (
              <div key={task.id}>
                <Task
                  id={task.id}
                  name={task.name}
                  completed={task.completed}
                  taskCompleted={() => {
                    this.taskCompleted(task.id);
                  }}
                  removeTask={this.removeTask}
                  taskSwitch={this.taskSwitch}
                  edit={this.edit}
                />

                {this.state.editName !== "" && this.state.editId === task.id && (
                  <div>
                    <input
                      type="text"
                      onChange={(e) =>
                        this.setState({ editName: e.target.value })
                      }
                      value={this.state.editName}
                    />
                    <div>
                      <button onClick={this.save}>შენახვა</button>
                      <button
                        onClick={() =>
                          this.setState({ editName: "", editId: "" })
                        }
                      >
                        გაუქმება
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ToDoTasks;