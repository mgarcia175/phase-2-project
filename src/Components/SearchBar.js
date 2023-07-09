import React from "react";

function SearchBar({ setSearchValue, searchValue }) {

    function handleSearch(e) {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    return (
        <>
            <form>
                <input type='search' placeholder="Search..." value={searchValue} onChange={handleSearch} />
            </form>
        </>
    )
}

export default SearchBar;