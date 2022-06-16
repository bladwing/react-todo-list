import React from "react";
import "./errorMessage.css";
import { toDoItems } from "./toDoItems";
import ToDoListItem from "./ToDoListItem";

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
          name: someThing.value,
        };
        return {
          emptyError: "",
          toDoItems: [...someThing.toDoItems, newItem],
          value: "",
        };
      });
    }
  };

  renderButtons = () => {
    if (this.state.editing) {
      return (
        <span className='navButton'>
          <button onClick={this.onSaveClick}>შენახვა</button>
          <button onClick={this.onCancelClick}>გაუქმება</button>
        </span>
      );
    }
    
    return (
      <span className='navButton'>
        <button onClick={this.onEditClick}>რედაქტირება</button>
        <button>წაშლა</button>
      </span>
    );
  }


  handleError = () => {
    this.setState({ emptyError: "გთხოვთ შეიყვანეთ დავალების სახელი..." });
  };

  deleteTask = (id) => {
    const newToDos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newToDos });
  };

  deleteAllTask = () => {
    this.setState({
      todos: [],
    });
  };




  render() {
    return (
      <div>
        <h1 className="header">დავალებების სია</h1>
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
            return (
              <li key={id} className="to-do-item">
                
               <div className="name"> {name.name}</div>
                <span className="navButton">
                  <button>რედაქტირება</button>
                  
                  <button
            onClick={() => this.props.deleteTask(this.props.id)}
          >
            წაშლა
          </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CreateItem;
