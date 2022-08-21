import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import "../style/menu.css";

import Classes from "./TodosUsingClasses/ToDoTasks";
import Hooks from "./TodosUsingHooks/ToDoTasks";
import NotFound from "../pages/NotFound"

export default function Menu() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/hooks" element={<Hooks />} />
        </Routes>
      </Router>
 
  );
}
