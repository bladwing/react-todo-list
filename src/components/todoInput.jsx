import React, { Component } from "react"

class CreateTask extends Component {
    handleCreate(e) {
        e.preventDefault();
      console.log('YES, we do it!!!')
    
    }

    
  render() {
    return(
      <form onSubmit={this.handleCreate.bind(this)} className="todo-item">
        <input type='text' placeholder="ახალი დავალება"/>
        <button> შექმნა</button>
      </form>
    )
  }
  
  }


  export default CreateTask;