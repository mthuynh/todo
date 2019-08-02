import React from 'react';

class ToDoList extends React.Component{
    toDoRef = React.createRef();
    createToDo = e => {
        e.preventDefault();
        const toDo = this.toDoRef.current.value;
        this.props.addToDo(toDo);
        e.currentTarget.reset();
    }
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.createToDo}>
                        <input placeholder="Task" ref={this.toDoRef}/>
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
            </div>
        );
    };
}

export default ToDoList;