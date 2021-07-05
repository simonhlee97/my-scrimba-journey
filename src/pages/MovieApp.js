import React, { useState } from 'react'
import MovieCard from '../movie-app/MovieCard'

export default function MovieApp() {
	return (
		<div className="container">
			<h1 className="page-title text-center">Movie Search App</h1>
			<SearchMovies />
		</div>
	)
}

function SearchMovies() {
	const [query, setQuery] = useState('')
	const [movies, setMovies] = useState([])

	const searchMovies = async (e) => {
		e.preventDefault()

		const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&query=${query}&page=1&include_adult=false`

		try {
			const res = await fetch(url)
			const data = await res.json()
			setMovies(data.results)
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<>
			<form className="movie" onSubmit={searchMovies}>
				<label className="label" htmlFor="query">
					Movie Name
				</label>
				<input
					className="input"
					type="text"
					name="query"
					placeholder="i.e. Jurassic Park"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="button" type="submit">
					Search
				</button>
			</form>
			<div className="card-list">
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
			</div>
		</>
	)
}
