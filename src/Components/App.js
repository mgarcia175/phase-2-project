import React, { useState, useEffect } from "react";
import MovieList from "./MovieList.js"
import NavBar from  "./NavBar.js"
import SearchBar from "./SearchBar.js";

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect((e) => {

    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=9ce935f0`)
    .then(res => res.json())
    .then(data => {
      if(data.Search) {
        setMovies(data.Search)
      } else return <h1>No movies to show... It's so cold..</h1>
    })
  }, [searchValue])


  return (
    <div>
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue}/>
      <NavBar />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;