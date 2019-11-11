import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';
import './App.css';

class App extends React.Component{
  state = {
    items: [],
    completeItems: 0,
    removedItems: []
  }
  addToDo = item => {
    const toDoItems = [...this.state.items];
    toDoItems.push(item);
    this.setState({
      items : toDoItems
    });
  }
  removeToDo = item => {
    const toDoItems = [...this.state.items];
    toDoItems.splice(item,1);
    this.setState({
      items : toDoItems
    });
  }
  completeToDo = item => {
    const completedToDos = this.state.completeItems + 1
    const toDoItems = [...this.state.items];
    toDoItems.splice(item,1);
    this.setState({
      items : toDoItems,
      completeItems: completedToDos
    });
  }
  render() {
    return(
      <div className="App">
        <Header title="To-Do List" />
        <ToDoList addToDo={this.addToDo} />
        <ul className="toDoList">
          {Object.keys(this.state.items)
            .map(key => <ToDoItem 
            key={key} 
            index={key}
            details={this.state.items[key]}
            removeToDo={this.removeToDo} 
            completeToDo={this.completeToDo}
            />)}
        </ul>
        <div class="completed">Complete: {this.state.completeItems}</div>
      </div>
    );
  };
}

export default App;
