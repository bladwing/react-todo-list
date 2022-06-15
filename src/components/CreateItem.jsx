import React from "react";
import "./errorMessage.css";
import {toDoItems} from './toDoItems';

class CreateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      toDoItems,
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.value === "") {
      return this.handleError(this.emptyError);
    } else {
      this.setState((someThing) => {
        const newItem = {
          id: someThing.toDoItems[someThing.toDoItems.length - 1].id + 1,
          description: someThing.value,
        };
        return {
          emptyError: "",
          toDoItems: [...someThing.toDoItems, newItem],
          value: "",
        };
      });
    }
  };
  handleError = () => {
    this.setState({ emptyError: "გთხოვთ შეიყვანეთ დავალების სახელი..." });
  };
  render() {
    return (
      <div>
      <span className="errorMessage">{this.state.emptyError}</span>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>შექმნა</button>
        </form>
        <ul>
          {this.state.toDoItems.reverse().map((name, id) => {
            return <div key={id}> {name.description}</div>;
          })}
        </ul>
      </div>
    );
  }
}

export default CreateItem;




// handleCreate(e) {
//   e.preventDefault();

//   if (!this.refs.newItemInput.value) {
//     return this.setState({ error: "გთხოვთ შეიყვანეთ დავალების სახელი..." });
//   } else if (
//     this.props.toDoItems
//       .map((element) => element.name)
//       .indexOf(this.refs.newItemInput.value) !== -1
//   ) {
//     this.setState({ error: "ესეთი დავალების სახელი უკვე არსებობს :(" });
//     this.refs.newItemInput.value = this.newItemInput.value;
//     return;
//   }
//   this.props.createItem(this.refs.newItemInput.value);
//   this.setState({ error: "" });
//   this.refs.newItemInput.value = "";
// }






{/* <span className="errorMessage">{this.state.error}</span>
<form onSubmit={this.handleCreate.bind(this)}>
  <input type="text" placeholder="ახალი დავალება" ref="newItemInput" />

  <button>შექმნა</button>
</form> */}