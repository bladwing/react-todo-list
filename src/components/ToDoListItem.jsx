import React, { Component } from 'react';

class ToDoListItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editing: false,
      };
    }
        
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
    
    onEditClick = () => {
      this.setState({ editing: true });
    }
    
    onCancelClick = () => {
      this.setState({ editing: false });
    }
    
    onSaveClick = (e) => {
      e.preventDefault();
      this.props.saveItem(this.props.name, this.refs.editInput.value)
      this.setState({ editing: false });
    }
    
    render() {
      return (
        <div className="to-do-item">
          <span className="name">
          {this.renderName}
          </span>
          <span className="actions">
          {this.renderButtons()}
          </span>
        </div>
      );
    }
  }

export default ToDoListItem;