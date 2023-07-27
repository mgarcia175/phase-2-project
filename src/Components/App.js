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
  Route,
} from "react-router-dom";
import AddMovieForm from "./AddMovieForm.js";


function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [watchList, setWatchList] = useState([])
  const [addedMovie, setAddedMovie] = useState(null)

  useEffect((e) => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=9ce935f0`)
    .then(res => res.json())
    .then(data => {
      if(data.Search) {
        setMovies(data.Search)
      }
    })
  }, [searchValue])

  const handleAddToWatchList = (movie) => {

    setWatchList((prevWatchList) => [...prevWatchList, movie])
    //This sets the old movie information to the same as it was before, plus the new movie
  } 


  return (
    <div>
      <Header />
      <AddMovieForm addedMovie={addedMovie} setAddedMovie={setAddedMovie}/>
      <Router>
        <div>
        <NavBar />
          <Switch>
              <Route exact path='/'>
                  <SearchBar setSearchValue={setSearchValue} searchValue={searchValue}/>
                  <MovieList movies={movies} onAddToWatchList={handleAddToWatchList}/>
              </Route>

              <Route path='/my-reviews'>
                  <MyReviews />
              </Route>

              <Route path='/watch-list'>
                  <WatchList watchList={watchList}/>
              </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;