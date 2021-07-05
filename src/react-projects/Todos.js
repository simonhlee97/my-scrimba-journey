import React from 'react'
import TodoItem from './Todo'
import todosData from './todosData'
import './todostyle.css'

function Todos() {
	const todoItems = todosData.map((item) => <TodoItem key={item.id} item={item} />)

	return (
		<div className="container">
			<h2 className="text-center">Todos List App</h2>
			<div className="todo-list">{todoItems}</div>
		</div>
	)
}

export default Todos
