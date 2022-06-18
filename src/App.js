import React from "react";
import ToDoTasks from "./components/TodosUsingClasses/ToDoTasks";
import "./components/TodosUsingClasses/errorMessage.css"
import "./App.css";

function App() {
  return (
    <div className="container">
      <ToDoTasks />
    </div>
  );
}

export default App;
