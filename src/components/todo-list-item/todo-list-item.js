import React from 'react';
import "./todo-list-item"

const TodoListItem = ({ label, important = false })=> {

const style   ={
    color:important ? "steelblue" : "black",
    fontWeight: important ? 'bold':"normal"
};

    return (
    <span className="todo-list-item">
        <span
        className="todo-list-item-label"
        style={style}>
         {label}
          </span>
<button type="button"
className="btn btn-outline-success">
<i className="fa fa-exclamation"/>
</button>
<button type="button"
className="btn btn-outline-danger">
<i className="fa fa-trash-o"/>
</button>

          </span>
    )
};
export default TodoListItem;