import React, { useState } from "react";
import MovieList from "./MovieList.js"
import NavBar from  "./NavBar.js"
import SearchBar from "./SearchBar.js";

function App() {
  const [movies, setMovies] = useState([])


  return (
    <div>
      <SearchBar />
      <NavBar />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;