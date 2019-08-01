import React from 'react';

class ToDoList extends React.Component{
    inputElement = React.createRef();
    createToDo = e => {
        e.preventDefault();
    }
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.createToDo}>
                        <input placeholder="Task" ref={this.inputElement}/>
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
            </div>
        );
    };
}

export default ToDoList;