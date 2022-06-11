import React from "react";

class CreateItem extends React.Component {
    handleCreate(e) {
      e.preventDefault();
      
      if (!this.refs.newItemInput.value) {
        alert('გთხოვთ შეიყვანოთ დავალების სახელი :(');
        return;
      } else if (this.props.toDoItems.map(element => element.name).indexOf(this.refs.newItemInput.value) != -1) {
        alert('ესეთი დავალების სახელი უკვე არსებობს :(');
        this.refs.newItemInput.value = this.newItemInput.value;
        return;
      }
      this.props.createItem(this.refs.newItemInput.value);
      this.refs.newItemInput.value = '';
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="ახალი დავალება" ref="newItemInput" />
            <button>შექმნა</button>
          </form>
        </div>
      );
    }
  }

  export default CreateItem;