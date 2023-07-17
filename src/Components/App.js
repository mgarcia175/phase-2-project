import React, { useState, useEffect } from "react";
import MovieList from "./MovieList.js"
import NavBar from  "./NavBar.js"
import SearchBar from "./SearchBar.js";
import Header from "./Header.js";
import WatchList from "./WatchList.js"

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect((e) => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=9ce935f0`)
    .then(res => res.json())
    .then(data => {
      if(data.Search) {
        setMovies(data.Search)
        console.log(data)
      }
    })
  }, [searchValue])


  return (
    <div>
      <Header />
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue}/>
      <NavBar />
      <MovieList movies={movies} />
      <WatchList />
    </div>
  );
}

export default App;