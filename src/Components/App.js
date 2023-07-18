import React, { useState, useEffect } from "react";
import MovieList from "./MovieList.js"
import NavBar from  "./NavBar.js"
import SearchBar from "./SearchBar.js";
import Header from "./Header.js";
import MyFlops from "./MyFlops.js";
import MyReviews from "./MyReviews.js";
import MyWatchList from "./MyWatchList.js";

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect((e) => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=9ce935f0`)
    .then(res => res.json())
    .then(data => {
      if(data.Search) {
        setMovies(data.Search)
      }
    })
  }, [searchValue])


  return (
    <div>
      <Header />
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue}/>
      <NavBar />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;