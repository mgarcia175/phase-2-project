import React, { useState, useEffect, useRef } from "react";

function MovieList({ movies, onAddToWatchList }) {
    const [showNotification, setShowNotification] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState('')

    const notificationRef = useRef(null)

    useEffect(() => {
        if(showNotification) {
            //adding the block to display will show the element
            notificationRef.current.style.display = 'block'

            const timeoutId = setTimeout(() => {
                setShowNotification(false)
            }, 2000)

            //clean up function to hide the notification
            return () => clearTimeout(timeoutId)
        }
    }, [showNotification])

    function showNotificationMessage(message) {
        setShowNotification(true)
        setNotificationMessage(message)
    }
    
    function handleAddToWatchList(movie) {
        onAddToWatchList(movie)
        showNotificationMessage(`${movie.Title} has been added to your Watch List!`)
    }

    function handleClap() {}

    return (
        <div>
            {showNotification && (
                <div className={`notification ${showNotification ? 'show' : ''}`}
                    ref={notificationRef}
                >
                    <p>{notificationMessage}</p>
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