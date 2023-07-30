import React from "react";

function WatchList({ watchList }) {
    const watchListArray = Array.from(watchList)

    return (
    <div>
        <h1 className="watch-list-text">My Watch List</h1>
        <div className="card-container">
                {watchListArray.map((movie) => (
                    <div className="movie-style" key={movie.imdbID}>
                        <img src={movie.Poster} alt={movie.Title} id="img"></img>
                    </div>
                ))}
        </div>
    </div>
    )
}

export default WatchList;