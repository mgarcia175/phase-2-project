import React, { useState, useEffect } from "react";
import MovieList from "./MovieList.js"
import NavBar from  "./NavBar.js"
import SearchBar from "./SearchBar.js";
import Header from "./Header.js";
import MyReviews from "./MyReviews.js";
import WatchList from "./WatchList.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [watchList, setWatchList] = useState(new Set())
  
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=9ce935f0`)
    .then(res => res.json())
    .then(data => {
      if(data.Search) {
        setMovies(data.Search)
      }
    })
  }, [searchValue])

  const handleAddToWatchList = (movie) => {
    if(!watchList.has(movie.imdbID)) {
      setWatchList((prevWatchList) => new Set([...prevWatchList, movie]))
    }
  }

  const handleWatchListDelete = (imdbID) => {
    setWatchList((prevWatchList) => {
      const updatedWatchListArray = Array.from(prevWatchList)
      const filteredWatchListArray = updatedWatchListArray.filter((movie) => movie.imdbID !== imdbID)
      const updatedWatchListSet= new Set(filteredWatchListArray)
      return updatedWatchListSet
    })
  }

  return (
    <div>
      <Header />
      <Router>
        <div>
        <NavBar />
          <Switch>
              <Route exact path='/'>
                  <SearchBar setSearchValue={setSearchValue} searchValue={searchValue}/>
                  <MovieList movies={movies} onAddToWatchList={handleAddToWatchList} />
              </Route>

              <Route path='/my-reviews'>
                  <MyReviews />
              </Route>

              <Route path='/watch-list'>
                  <WatchList watchList={watchList} handleWatchListDelete={handleWatchListDelete}/>
              </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;