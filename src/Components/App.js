import React, { useState } from "react";
import MovieList from "./MovieList.js"

function App() {
  const [movies, setMovies] = useState([
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    }
  ])

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;