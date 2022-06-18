import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <li key={this.props.id}>
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={this.props.completed}
          onChange={this.props.taskCompleted}
        />

        {this.props.done === true ? (
          <div>{this.props.name}</div>
        ) : (
          <div className="taskName">
            {this.props.name}
          </div>
        )}

        <div className="taskSwitch">
          <span
            className="nav"
            onClick={() => this.props.taskSwitch(this.props.id, "+")}
          >
            <button>+</button>
          </span>
          <span
            className="nav"
            onClick={() => this.props.taskSwitch(this.props.id, "-")}
          >
            <button>-</button>
          </span>
        </div>
        <span className="buttonContainer">
          <button onClick={() => this.props.removeTask(this.props.id)}>
            წაშლა
          </button>
          <button
            onClick={() => this.props.edit(this.props.name, this.props.id)}
          >
            რედაქტირება
          </button>
        </span>
      </li>
    );
  }
}

export default Task;
