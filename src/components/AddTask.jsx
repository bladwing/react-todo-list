import React from "react";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  NewTask = () => {
    this.setState({ newTask: "" });
  };

  render() {
    return (
        <div className="form">
        <input
          type="text"
          placeholder="დავალების სახელი..."
          onChange={(e) => this.setState({ newTask: e.target.value })}
          value={this.state.newTask}
        />
        <button
          onClick={() => {
            this.props.AddTask(this.state.newTask, this.NewTask);
          }}
        >
          დამატება
        </button>
        </div>
    );
  }
}

export default AddTask;
