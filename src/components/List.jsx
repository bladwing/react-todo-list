import React from "react";
import ToDoListItem from './ListItem'


class ToDoList extends React.Component {
    renderItems() {
      return this.props.toDoItems.map((item, index) => 
      <ToDoListItem key={index} {...item} {...this.props} />
      );
    }
    
    render() {
      return (
        <div>
          {this.renderItems()}
        </div>
      );
    }
  }


export default ToDoList;