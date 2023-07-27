import React from "react";

function WatchList({ watchList }) {

    return (
    <div>
        <h1 className="watch-list">My Watch List</h1>
            <div className="card-container">
                    <ul className="movie-style">
                        {watchList.map((movie) => (
                            <li key={movie.index}>
                                <img src={movie.Poster}></img>
                            </li>
                        ))}
                    </ul>
        </div>
    </div>
    )
}

export default WatchList;