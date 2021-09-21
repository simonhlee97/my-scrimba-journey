import React from 'react'
import styles from './card.module.css'

export default function MovieCard({ movie }) {
    const truncate = (str) => {
        return str.length > 290 ? str.substring(0, 284) + ' ...' : str
    }
    return (
        <div className={styles.card}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'} />
                </div>
                <div className="column">
                    <h3 className="card--title">{movie.title}</h3>
                    <br />
                    <br />
                    <small>DATE: {movie.release_date}</small>
                    <br />
                    <br />
                    <small>RATING: {movie.vote_average}</small>
                </div>
            </div>

            <div className="card--content">
                <p className="card--desc">{truncate(movie.overview)}</p>
            </div>
        </div>
    )
}
