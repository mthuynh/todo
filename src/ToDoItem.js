import React from 'react';

class ToDoItem extends React.Component{
    render(){
        const {item} = this.props.details;
        return(
            <li className="toDoList__item">
                <p className="toDoList__text">{item}</p>
                <div className="toDoList__buttons">
                    <button className="toDoList__button" onClick={() => this.props.completeToDo(this.props.index)}>&#10004;</button>
                    <button className="toDoList__button toDoList__button--delete" onClick={() => this.props.removeToDo(this.props.index)}>&#10008;</button>
                </div>
            </li>
        );
    };
}

export default ToDoItem;