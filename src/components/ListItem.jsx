import React, { Component } from 'react';

class ToDoListItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editing: false
      };
    }
    
    renderName = () => {
      const itemStyle = {
        'textDecoration': this.props.completed ? 'line-through red' : 'none',
        cursor: 'pointer'
      };
      
      if(this.state.editing) {
        return (
          
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input className="editForm" type="text" defaultValue={this.props.name} ref="editInput" />
            </form>
        );
      }
      
      return (
        <span style={itemStyle} 
              onClick={this.props.toggleComplete.bind(this, this.props.name)}>{this.props.name}
        </span>
      );
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
          <button onClick={this.props.deleteItem.bind(this.props.name)}>წაშლა</button>
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
          {this.renderName()}
          </span>
          <span className="actions">
          {this.renderButtons()}
          </span>
        </div>
      );
    }
  }

export default ToDoListItem;