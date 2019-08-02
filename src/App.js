import React from 'react';
import Header from './Header';
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
  }
  render() {
    return(
      <div className="App">
        <Header title="To-Do List" />
        <ToDoList addToDo={this.addToDo} />
        <ul>
          {Object.keys(this.state.items)
            .map(key => <ToDoItem 
            key={key} 
            details={this.state.items[key]} 
            />)}
        </ul>
      </div>
    );
  };
}

export default App;
