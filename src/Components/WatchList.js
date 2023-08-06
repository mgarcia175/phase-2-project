import React from "react";

function WatchList({ watchList, handleWatchListDelete }) {
    const watchListArray = Array.from(watchList)

    return (
    <div>
        <h1 className="nav-text">My Watch List</h1>
        <div className="card-container">
                {watchListArray.map((movie) => (
                    <div className="movie-style" key={movie.imdbID}>
                        <img src={movie.Poster} alt={movie.Title} id="img"></img>
                        <button className="buttons" onClick={() => handleWatchListDelete(movie.imdbID)}>&#9989;</button>
                    </div>
                ))}
        </div>
    </div>
    )
}

export default WatchList;