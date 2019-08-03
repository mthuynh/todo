import React from 'react';

class ToDoList extends React.Component{
    toDoItemRef = React.createRef();
    createToDo = e => {
        e.preventDefault();
        const toDo = {
            item: this.toDoItemRef.current.value
        }
        this.props.addToDo(toDo);
        e.currentTarget.reset();
    }
    render(){
        return(
            <div className="toDoListForm">
                <form onSubmit={this.createToDo}>
                    <input className="toDoListForm__input" placeholder="Task" ref={this.toDoItemRef}/>
                    <button className="toDoListForm__button" type="submit"> Add Task </button>
                </form>
            </div>
        );
    };
}

export default ToDoList;