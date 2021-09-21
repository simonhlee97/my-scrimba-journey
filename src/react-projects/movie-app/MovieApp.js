import React, { useState } from 'react'
import MovieCard from './MovieCard'
import styles from './movies.module.css'

export default function MovieApp() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Movie Search App</h1>
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
                <label className={styles.label} htmlFor="query">
                    Movie Name
                </label>
                <br />
                <div className={styles.wrapper}>
                    <input className={styles.input} type="text" name="query" placeholder="i.e. Jurassic Park" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button className={styles.button} type="submit">
                        Search
                    </button>
                </div>
            </form>
            <div className={styles.cardlist}>
                {movies
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>
        </>
    )
}
