import React, { useState } from "react";
import MovieList from "./MovieList.js"
import NavBar from  "./NavBar.js"

function App() {
  const [movies, setMovies] = useState([])


  return (
    <div>
      <NavBar />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;