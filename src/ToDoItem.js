import React from 'react';

class ToDoItem extends React.Component{
    render(){
        const {item} = this.props.details;
        return(
            <li>
                <p>{item}</p>
                <span><button removeToDo={this.props.removeToDo}>x</button></span>
            </li>
        );
    };
}

export default ToDoItem;