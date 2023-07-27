import React from "react";

function MovieList({ movies, onAddToWatchList }) {

    function handleClap() {}

    return (
        <div className="card-container">
            {movies.map((movie, index) => (
            <div className="movie-style" key={movie.id || index}>
                <img src={movie.Poster} alt={movie.Title} id="img"></img>

                <button className='buttons' onClick={() => handleClap(movie)}>&#x1F44F;</button>
                <button className='buttons' onClick={() => onAddToWatchList(movie)}>&#x1F440;</button>
            </div>
            ))}
        </div>
    )
}

export default MovieList;