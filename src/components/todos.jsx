import React, { Component } from 'react';

class Todos extends Component {

    //Component state with default values
    state = {
        addTodoValue: "",
        todos: [
            {
                id: 1,
                value: "todo 1",
                isDone: false
            },
            {
                id: 2,
                value: "todo 2",
                isDone: true
            },
            {
                id: 3,
                value: "todo 3",
                isDone: false
            }
        ]
    }
}


export default Todos;