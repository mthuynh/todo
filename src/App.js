import React from 'react';
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';
import './App.css';

class App extends React.Component{
  state = {
    items: []
  }
  addToDo = item => {
    const toDoItems = [...this.state.items];
    toDoItems.push(item);
    this.setState({
      items : toDoItems
    });
    console.log(this.state.items);
  }
  render() {
    return(
      <div className="App">
        <ToDoList addToDo={this.addToDo} />
        <ul>
          
        </ul>
      </div>
    );
  };
}

export default App;
