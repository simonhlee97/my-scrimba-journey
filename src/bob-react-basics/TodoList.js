import React from 'react'
import TodoItem from './Todo'
import todosData from './todosData'
import './todostyle.css'

function TodoList() {
	const todoItems = todosData.map((item) => <TodoItem key={item.id} item={item} />)

	return (
		<div className="page-todolist">
			<div className="todo-list">{todoItems}</div>
			<h3>Key Concepts and Big Ideas</h3>
			<p>Styling React Components</p>
			<p>Props</p>
		</div>
	)
}

export default TodoList
