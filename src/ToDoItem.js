import React from 'react';

class ToDoItem extends React.Component{
    render(){
        const {item} = this.props.details;
        return(
            <li>
                <p>{item}</p>
            </li>
        );
    };
}

export default ToDoItem;