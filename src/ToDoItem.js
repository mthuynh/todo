import React from 'react';

class ToDoItem extends React.Component{
    render(){
        const {item} = this.props.details;
        const key = this.props.index;
        return(
            <li className="toDoList__item">
                <p className="toDoList__text">{item}</p>
                <div className="toDoList__buttons">
                    <button className="toDoList__button" onClick={() => this.props.removeToDo(key)}>&#10004;</button>
                    <button className="toDoList__button toDoList__button--delete" onClick={() => this.props.removeToDo(key)}>&#10008;</button>
                </div>
            </li>
        );
    };
}

export default ToDoItem;