import React from "react";

function MovieList(props) {

    return(
        <div>
            {props.movies.map((movie, index) => (
            <div key={index}>
                <img src={movie.Poster} alt="Poster of movie"></img>
            </div>
            ))}
        </div>
    )
}

export default MovieList;