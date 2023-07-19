import React, { useState } from "react";
import MyReviews from "./MyReviews";
import MyWatchList from "./MyWatchList";
import MyFlops from "./MyFlops";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NavBar() {

  const [page, setPage] = useState('/')

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/my-reviews">My Reviews</Link>
            </li>
            <li>
              <Link to="/watchlist">My Watch List</Link>
            </li>
            <li>
              <Link to="/my-flops">My Flops</Link>
            </li>
          </ul>
  
          <Switch>
              <Route path='/my-reviews'>
                  <MyReviews />
              </Route>

              <Route path='/watch-list'>
                  <MyWatchList />
              </Route>

              <Route path='/my-flops'>
                  <MyFlops />
              </Route>

              <Route path='*'>
                  <h1 id='error'>No movies.. it's so cold.. </h1>
              </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default NavBar;