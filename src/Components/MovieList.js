import React from "react";

function MovieList(props) {

    function handleReview(movie) {
        console.log(movie)

    }

    function handleClap(props) {
        console.log(props)

    }

    function handleWatch(props) {
        console.log(props)
    }

    return(

        <div className="card-container">
            {props.movies.map((movie, index) => (
            <div className="movie-style" key={index}>
                <img src={movie.Poster} alt="Poster of movie" id="img"></img>

                <button className='buttons' id='pencil' onClick={handleReview}>&#x270E;</button>
                <button className='buttons' onClick={handleClap}>&#x1F44F;</button>
                <button className='buttons' onClick={handleWatch}>&#x1F440;</button>
            </div>
            ))}
        </div>
    )
}

export default MovieList;