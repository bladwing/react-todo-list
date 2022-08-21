import React from "react";

class RemoveTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="deleteButtonsContainer">
        <button onClick={() => this.props.deleteAllTask()}>
          Remove all Tasks
        </button>
        <button onClick={() => this.props.removeAllCompletedTask()}>
          Remove all finished Tasks
        </button>
        <button onClick={() => this.props.removeAllChekedTask()}>
          Remove Checked Tasks
        </button>
      </div>
    );
  }
}

export default RemoveTasks;
