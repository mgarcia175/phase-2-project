import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

function NavBar() {

    return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">All Movies</Link>
            </li>
            <li>
              <Link to="/watchlist">My Watch List</Link>
            </li>
            <li>
              <Link to="/reviews">My Reviews</Link>
            </li>
          </ul>
  
          {/* <Switch>
            <Route path="/watchlist">
              <WatchList />
            </Route>
            <Route path="/reviews">
              <Reviews />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
        </div>
      </Router>
    )
}

export default NavBar;