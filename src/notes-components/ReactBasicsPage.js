import React from 'react'
import TodoList from '../bob-react-basics/TodoList'

const ReactBasicsPage = () => {
	return (
		<div className="container">
			<h2 className="page-title text-center">Learn React</h2>
			<section className="intro text-center">
				<p>
					These are my notes and projects from Bob Ziroll's <em>Learn React</em> course,
					available (for FREE!) on{' '}
					<a href="https://scrimba.com/" target="_blank" rel="noreferrer">
						Scrimba.com
					</a>
				</p>
				<p>
					I did not take notes on every lecture or concept. Just the ones I find difficult
					to remember.
				</p>
			</section>
			<section className="tableofcontents">
				<h4 className="text-center">Table of Contents</h4>
				<ul className="contentlist">
					<li>Styling in React</li>
					<li>How to Pass Props (Todo App)</li>
					<li>State</li>
					<li>Handline Events</li>
					<li>Conditional Rendering</li>
					<li>Fetching Data from APIs</li>
					<li>Hooks: useState and useEffect</li>
				</ul>
			</section>

			<Styling />
			<Props />
			<State />
			<Events />
			<Conditional />
			<Fetch />
			<Hooks />

			<section className="project">
				<h3>Todo App</h3>
				<TodoList />
			</section>
		</div>
	)
}
export default ReactBasicsPage

function Styling() {
	return <section className="notes"></section>
}

function Props() {
	return (
		<section className="notes">
			<p>Props can only be passed down from a Parent down to a Child component.</p>
			<p>Props is an immutable object, meaning it cannot be changed.</p>
		</section>
	)
}

function State() {
	return <section className="notes"></section>
}
function Events() {
	return <section className="notes"></section>
}
function Conditional() {
	return <section className="notes"></section>
}

function Fetch() {
	return <section className="notes"></section>
}

function Hooks() {
	return <section className="notes"></section>
}
