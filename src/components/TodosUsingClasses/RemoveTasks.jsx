import React from "react";

class RemoveTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.deleteAllTask()}>
          ყველა დავალების წაშლა
        </button>
        <button onClick={() => this.props.removeAllCompletedTask()}>
          ყველა დასრულებული დავალების წაშლა
        </button>
        <button onClick={() => this.props.removeAllChekedTask()}>
          მონიშნული დავალებების წაშლა
        </button>
      </div>
    );
  }
}

export default RemoveTasks;
