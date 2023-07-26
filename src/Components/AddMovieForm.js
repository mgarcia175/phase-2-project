import React, { useState } from "react";

function AddMovieForm({onAddToWatchList}) {
    const [title, setTitle] = useState('')
    const [poster, setPoster] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const addedMovie = {
            title,
            poster,
        }
    }




    return(
        <div>
        </div>
    )
}

export default AddMovieForm