import React from 'react'
import Card from './Card'

export default function CardList() {
	return (
		<div>
			<Card
				name="Fluffykins"
				imgUrl="http://placekitten.com/400/200"
				phone="(212) 555-2345"
				email="fluff@me.com"
			/>

			<Card
				name="Destroyer"
				imgUrl="http://placekitten.com/400/300"
				phone="(212) 555-3456"
				email="ofworlds@yahoo.com"
			/>
		</div>
	)
}
