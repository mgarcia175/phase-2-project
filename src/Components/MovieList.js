import React from "react";

function MovieList(props) {

    function handleReview(movie) {
        console.log(window.history)
    }

    function handleClap() {

    }

    function handleWatch() {
    }

    return (

        <div className="card-container">
            {props.movies.map((movie, index) => (
            <div className="movie-style" key={index}>
                <img src={movie.Poster} alt="Poster of movie" id="img"></img>

                <button className='buttons' id='pencil' onClick={() => handleReview(movie)}>&#x270E;</button>
                <button className='buttons' onClick={() => handleClap(movie)}>&#x1F44F;</button>
                <button className='buttons' onClick={() => handleWatch(movie)}>&#x1F440;</button>
            </div>
            ))}
        </div>
    )
}

export default MovieList;