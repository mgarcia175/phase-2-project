import React from "react";

function AddMovieForm({ addedMovie }) {
 
    return (
        <div>
            <div>
                {addedMovie && (
                    <div>
                        <img src={addedMovie.Poster} alt={addedMovie.Title} id="img"></img>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddMovieForm