import React, { useEffect, useState } from 'react'

function ApiPage() {
	const [list, setList] = useState([])

	useEffect(() => {
		fetch('https://api.coindesk.com/v1/bpi/currentprice/CNY.json')
			.then((res) => {
				if (!res.ok) {
					throw Error('Something went wrong')
				}
				return res.json()
			})
			.then((data) => {
				setList(data)
				console.log(data)
			})
	}, [])

	return (
		<>
			<div className="container">
				<section className="wrapper">
					<h1>BITCOIN Data</h1>
					<h3>{list.disclaimer}</h3>
					<h3>${list.bpi.USD.rate}</h3>
				</section>

				<section className="weather">
					<h1>Current Weather, Seoul, Korea</h1>
				</section>
			</div>
		</>
	)
}

export default ApiPage

// function Weather() {
// 	const [temp, setTemp] = useState([])

// 	useEffect(() => {
// 		navigator.geolocation.getCurrentPosition((position) => {
// 			fetch(
// 				`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`
// 			)
// 				.then((res) => {
// 					if (!res.ok) {
// 						throw Error('Weather data not available')
// 					}
// 					return res.json()
// 				})
// 				.then((data) => {
// 					console.log(data)
// 					setTemp(data)
// 				})
// 		})
// 	}, [])

// 	return (
// 		<div className="wrapper">
// 			<h1>Weather</h1>
// 			{/* {temp && temp.name} */}
// 			{/* <img src={temp.iconUrl} alt="weather" /> */}
// 			{/* <p className="weather-city">{temp.name}</p> */}
// 			{/* <p className="weather-temp">{Math.round(temp.main.temp)}º</p> */}
// 		</div>
// 	)
// }
