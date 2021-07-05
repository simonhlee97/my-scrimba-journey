import React from 'react'

function Todo(props) {
	return (
		<div className="todo-item">
			<input type="checkbox" checked={props.item.completed} />
			<p>{props.item.text}</p>
		</div>
	)
}
export default Todo
