import React from 'react'

export default function HomePage() {
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay

	if (hours < 12) {
		timeOfDay = 'morning'
	} else if (hours >= 12 && hours < 17) {
		timeOfDay = 'afternoon'
	} else {
		timeOfDay = 'evening'
	}
	return (
		<div className="container homepage">
			<h1>Hello, and good {timeOfDay}</h1>

			<p>
				Here are some small projects I built (along with some course notes) while going
				through Scrimba's Frontend Career Path. This website was built with VueJS! Just
				kidding. React, of course. Scrimba.com is an online learning platform for aspiring
				web developers. They have many excellent free courses, as well as a Pro Member
				subscription option.
			</p>

			<section className="bitcoin">
				<p>Bloah Blah Blah Blah Blah</p>
			</section>
		</div>
	)
}
