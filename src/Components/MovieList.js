import React from "react";

function MovieList({ movies, onAddToWatchList }) {
    
    function handleAddToWatchList(movie) {
        onAddToWatchList(movie)
    }

    function handleClap() {}

    return (
        <div className="card-container">
            {movies.map((movie) => (
            <div className="movie-style" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} id="img"></img>

                <button className='buttons' onClick={() => handleClap(movie)}>&#x1F44F;</button>
                <button className='buttons' onClick={() => handleAddToWatchList(movie)}>&#x1F440;</button>
            </div>
            ))}
        </div>
    )
}

export default MovieList;