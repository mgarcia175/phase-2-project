import React, { useState } from "react";

function AddMovieForm({onAddToWatchList, addedMovie }) {
    const [title, setTitle] = useState('')
    const [poster, setPoster] = useState('')

    const handleSubmit = (e) => {
        //prevents page reload
        e.preventDefault()
        //Will call function in App.js with added movie
        if (addedMovie) {
            console.log(addedMovie)
            onAddToWatchList(addedMovie)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>

                </div>
            </form>
        </div>
    )
}

export default AddMovieForm