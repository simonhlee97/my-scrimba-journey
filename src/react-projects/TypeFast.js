import React, { useState } from 'react'

export default function TypeFast() {
	const [text, setText] = useState('')

	function handleChange(e) {
		const { value } = e.target
	}
	function calculateWordCount(text) {
		const wordsArr = text.split(' ')
		return wordsArr.length
	}
	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea onChange={handleChange} value={text} />
			<h4>Time remaining: ???</h4>
			<button>Start</button>
			<h1>Word count: ???</h1>
		</div>
	)
}
