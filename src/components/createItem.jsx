import React from "react";
import './errorMessage.css';

class CreateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemInput: "",
      id: "",
      error: "",
    };
    
  }
 
    handleCreate(e) {
      e.preventDefault();

      if (!this.refs.newItemInput.value) {
        return (
         this.setState({ error: "გთხოვთ შეიყვანეთ დავალების სახელი..." })
        )
      } else if (this.props.toDoItems.map(element => element.name).indexOf(this.refs.newItemInput.value) !== -1) {
        this.setState({ error: 'ესეთი დავალების სახელი უკვე არსებობს :('})
        this.refs.newItemInput.value = this.newItemInput.value;
        return;
      }
      this.props.createItem(this.refs.newItemInput.value);
      this.setState({ error: "" })
      this.refs.newItemInput.value = '';
    }
    
    render() {
      return (
        <div>
          
          <span className="errorMessage">{this.state.error}</span>
          <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="ახალი დავალება" ref="newItemInput" />
            
            <button>შექმნა</button>
          </form>
          
        </div>
        
      );
    }
  }

  export default CreateItem;