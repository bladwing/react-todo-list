import React, { Component } from 'react';

import './App.css'
import Page from "./components/mainPage";




class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">ჩემი პირველი - To Do სია</h1>

        <Page />
        
        
      </div>
    );
  }
}

export default App;
