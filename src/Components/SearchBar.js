import React from "react";

function SearchBar({ setSearchValue, searchValue }) {

    function handleSearch(e) {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    return (
        <>
            <form id="search-bar">
                <input type='search' placeholder="Search movie.." value={searchValue} onChange={handleSearch} className="search-bar"/>
            </form>
        </>
    )
}

export default SearchBar;