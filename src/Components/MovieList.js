import React, { useState } from "react";

function MovieList({ movies, onAddToWatchList }) {
    const [showNotification, setShowNotification] = useState(false)
    const [notificattionMessage, setNotificationMessage] = useState('')

    function showNotificationMessage(message) {
        setShowNotification(true)
        setNotificationMessage(message)

        setTimeout(() => {
            setNotificationMessage(false)
            setNotificationMessage('')
        }, 2000)
    }

    
    function handleAddToWatchList(movie) {
        onAddToWatchList(movie)
        showNotificationMessage(`${movie.Title} has been added to your Watch List!`)
    }

    function handleClap() {}

    return (
        <div>
            {showNotification && (
                <div className="notification">
                    <p>{notificattionMessage}</p>
                </div>
            )}
                <div className="card-container">
                    {movies.map((movie) => (
                    <div className="movie-style" key={movie.imdbID}>
                        <img src={movie.Poster} alt={movie.Title} id="img"></img>

                        <button className='buttons' onClick={() => handleClap(movie)}>&#x1F44F;</button>
                        <button className='buttons' onClick={() => handleAddToWatchList(movie)}>&#x1F440;</button>
                    </div>
                    ))}
                </div>
        </div>
    )
}

export default MovieList;