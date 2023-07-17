import React from "react";

function MovieList(props) {

    return(
        <div className="card-container">
            {props.movies.map((movie, index) => (
            <div className="movie-style" key={index}>
                <img src={movie.Poster} alt="Poster of movie" id="img"></img>
            </div>
            ))}
        </div>
    )
}

export default MovieList;