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

  useEffect((e) => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=9ce935f0`)
    .then(res => res.json())
    .then(data => {
      if(data.Search) {
        console.log(data)
        setMovies(data.Search)
      }
    })
  }, [searchValue])

  const handleAddToWatchList = (movie) => {
    //takes in movie and will be passed to MovieList to update added movies
    setWatchList((prevWatchList) => [...prevWatchList, movie])
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
                  <MovieList movies={movies} />
                  <AddMovieForm onAddToWatchList={handleAddToWatchList}/>
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