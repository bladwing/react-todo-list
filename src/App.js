import React from 'react';
import toDoItems from './components/todoBase';
import ToDoList from './components/List';
import CreateItem from './components/createItem'
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      toDoItems
    };
  }

  createItem(item) {
    this.state.toDoItems.unshift({
      name: item,
      completed: false
    });
    this.setState({
      toDoItems: this.state.toDoItems
    });
  }
  
  findItem(item) {
    return this.state.toDoItems.filter((element) => element.name === item)[0];
  }
  
  toggleComplete(item) {
    let selectedItem = this.findItem(item);
    selectedItem.completed = !selectedItem.completed;
    this.setState({ toDoItems: this.state.toDoItems });
  }
  
  saveItem(oldItem, newItem) {
    let selectedItem = this.findItem(oldItem);
    selectedItem.name = newItem;
    this.setState({ toDoItems: this.state.toDoItems });
  }
  
  deleteItem(item) {
    let index = this.state.toDoItems.map(element => element.name).indexOf(item);
    this.state.toDoItems.splice(index, 1);
    this.setState({ toDoItems: this.state.toDoItems });
  }

  render() {
    return (
      <div className='container'>
        <div>
          <h1 className='header'>დავალებების სია</h1>


        </div>
        <CreateItem toDoItems={this.state.toDoItems} 
                    createItem={this.createItem.bind(this)} />


        <ToDoList toDoItems={this.state.toDoItems} 
                  deleteItem={this.deleteItem.bind(this)} 
                  saveItem={this.saveItem.bind(this)} 
                  toggleComplete={this.toggleComplete.bind(this)} />
      </div>
    );
  }
}






export default App;
