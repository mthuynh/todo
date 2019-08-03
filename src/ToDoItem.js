import React from 'react';

class ToDoItem extends React.Component{
    render(){
        const {item} = this.props.details;
        const key = this.props.index;
        return(
            <li>
                <p>{item}</p>
                <button onClick={() => this.props.removeToDo(key)}>x</button>
            </li>
        );
    };
}

export default ToDoItem;