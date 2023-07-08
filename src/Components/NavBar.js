import React, { useState } from "react";

function NavBar() {
    const [movieSearch, setMovieSearch] = useState("")

    function handleMovieSearch(e) {
        e.preventDefault()
        setMovieSearch(e.target.value)

    }

    return (
        <>
            <input type='search' placeholder="Search..." value={movieSearch} onChange={handleMovieSearch}>
                
            </input>

        </>
    )
}

export default NavBar