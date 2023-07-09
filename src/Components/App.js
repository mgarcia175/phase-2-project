import React, { useState, useEffect } from "react";
import MovieList from "./MovieList.js"
import NavBar from  "./NavBar.js"
import SearchBar from "./SearchBar.js";

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {

    fetch(`http://www.omdbapi.com/?s=star wars&apikey=9ce935f0`)
    .then(res => res.json())
    .then(data => console.log(data))
}, [])


  return (
    <div>
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue}/>
      <NavBar />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;