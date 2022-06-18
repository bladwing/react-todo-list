import React, {useState} from "react";

function AddTask(props)  {
const [newTask, setNewTask] = useState('');

 const NewTask = () => {
    setState({ newTask: "" });
  };

   
    return (
        <div className="form">
        <input
          type="text"
          placeholder="დავალების სახელი..."
          onChange={(e) => setNewTask(e.target.value )}
          value={newTask}
        />
        <button
          onClick={() => {
            props.AddTask(state.newTask, NewTask);
          }}
        >
          დამატება
        </button>
        </div>
    );
  
}

export default AddTask;
