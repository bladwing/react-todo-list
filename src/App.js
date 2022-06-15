import React from "react";
import { toDoItems } from "./components/toDoItems";
import ToDoList from "./components/List";
import CreateItem from "./components/CreateItem";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems,
    };
  }

  CreateItem(item) {
    this.state.toDoItems({
      name: item,
      id: "",
      completed: false,
    });
  }

  findItem = (item) => {
    return this.state.toDoItems.filter((element) => element.name === item)[0];
  };

  toggleComplete = (item) => {
    const selectedItem = this.findItem(item);
    selectedItem.completed = !selectedItem.completed;
    this.setState({ toDoItems: this.state.toDoItems });
  };

  saveItem = (oldItem, newItem) => {
    const selectedItem = this.findItem(oldItem);
    selectedItem.name = newItem;
    this.setState({ toDoItems: this.state.toDoItems });
  };

  deleteItem = (item) => {
    const index = this.state.toDoItems
      .map((element) => element.name)
      .indexOf(item);
    this.state.toDoItems.splice(index, 1);
    this.setState({ toDoItems: this.state.toDoItems });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h1 className="header">დავალებების სია</h1>
        </div>
        <CreateItem CreateItem={this.createItem} />

        <ToDoList
          toDoItems={this.state.toDoItems}
          deleteItem={this.deleteItem}
          saveItem={this.saveItem}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
