import React from 'react';
import ToDoList from './ToDoList';
import './App.css';

class App extends React.Component{
  state = {
    items: []
  }
  addToDo = item => {}
  render() {
    return(
      <div className="App">
        <ToDoList addToDo={this.addToDo} />
      </div>
    );
  };
}

export default App;
