import React, { useState } from "react";

function SearchBar() {
    const [movieSearch, setMovieSearch] = useState("")

    function handleMovieSearch(e) {
        e.preventDefault()
        setMovieSearch(e.target.value)

    }

    return (
        <>
            <input 
            type='search' 
            placeholder="Search..." 
            value={movieSearch} 
            onChange={handleMovieSearch}>    
            </input>
        </>
    )
}

export default SearchBar;