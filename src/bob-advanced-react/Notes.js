import React from 'react'

export default function Notes() {
	return (
		<>
			<div>
				<h3>D.R.Y. (Don't Repeat Yourself</h3>
				<h4>Inheritance</h4>
				<p>
					Object-oriented, classes and sub-classes, instantiating objects, inheriting
					traits
				</p>

				<hr />
				<h4>Composition</h4>
				<p>Bob prefers composition over inheritance!</p>
				<ol>
					<li>Components with props</li>
					<li>Children</li>
					<li>Higher-order Components*</li>
					<li>Render props*</li>
					<li>* a bit less popular with introduction of Hooks</li>
				</ol>
			</div>
			<Children />
			<Higherorder />
		</>
	)
}

function Children() {
	return (
		<div className="notes">
			<h3>Props.Children</h3>

			<p>You can create flexible, re-usable wrapper components very easily.</p>

			<p>Child components can receive markup from a parent component via:</p>
			<h4>
				<code>props.children</code>
			</h4>

			<h3>Example:</h3>

			<h3>
				If you want to ensure a certain structure, then passing props is better practice
				than giving total control over child components via props.children.
			</h3>
		</div>
	)
}

function Higherorder() {
	return (
		<div className="notes">
			<h3>Higher Order Components (HOC)</h3>
			<p>
				Similar idea to higher-order functions, which are functions that takes another
				function as a parameter.
			</p>
			<p>
				HOC is a function that takes a component as its first argument and returns a new
				component that wraps the given component, providing extra capabilities to it, such
				as abstracting away logic or props.
			</p>
			<p>An improvement and 2nd iteration of HOCs is Render Props</p>
		</div>
	)
}
