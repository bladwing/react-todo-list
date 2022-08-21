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
          onClick={(e) =>
            this.props.isChecked(e.target.checked, this.props.name)
          }
        />
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={this.props.completed}
          onChange={this.props.taskCompleted}
        />
        {this.props.completed === true ? (
          <span className="taskName strike">{this.props.name}</span>
        ) : (
          <div className="taskName">{this.props.name}</div>
        )}

        <div className="taskSwitch">
          <span
            className="nav"
            onClick={() => this.props.taskSwitch(this.props.id, "+")}
          >
            <button className="inrease">+</button>
          </span>
          <span
            className="nav"
            onClick={() => this.props.taskSwitch(this.props.id, "-")}
          >
            <button className="decrease">-</button>
          </span>
        </div>
        <span className="buttonContainer">
          <button onClick={() => this.props.removeTask(this.props.id)} className="remove">
            Remove
          </button>
          <button
            onClick={() => this.props.edit(this.props.name, this.props.id)}
            className="edit">
            Edit
          </button>
        </span>
      </li>
    );
  }
}

export default Task;
