import React, { Component } from 'react';

import './App.css'
import Todo from "./components/todo";
import todoData from './components/todoData';
import CreateTask from './components/todoInput';




class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: todoData
    }
  }
  
  handleChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState(state => {
      let {todoItems} = state;
      todoItems[index].completed = true;
      return todoItems;
    })
  }

  render() {
    const {todoItems} = this.state;
    const activeTasks = todoItems.filter(task => task.completed === false);
    const completedTasks = todoItems.filter(task => task.completed === true);
    const finalTasks = [...activeTasks,...completedTasks].map(item => {
      return (
        <Todo
          key={item.id}
          description={item.description}
          completed={item.completed}
          handleChange= { () => {this.handleChange(item.id)} }
        />
      )
    })
      return (
        <div> 
          <CreateTask/>
          {finalTasks}
          
        </div>
      );
    }
}





export default App;
