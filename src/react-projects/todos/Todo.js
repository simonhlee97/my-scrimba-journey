import React from 'react'

function Todo(props) {
    const completed = {
        fontStyle: 'italic',
        color: '#44d',
        textDecoration: 'line-through',
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
            <p style={props.item.completed ? completed : null}>{props.item.text}</p>
        </div>
    )
}
export default Todo
