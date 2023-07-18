import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import MyReviews from "./MyReviews";
import MyWatchList from "./MyWatchList";
import MyFlops from "./MyFlops";

function NavBar() {

  const [page, setPage] = useState('/')

    return (

      <div>
        <NavBar on changePage={setPage} />
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
                <h1>404 Not Found</h1>
            </Route>
        </Switch>
      </div>



      //   <Router>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to="/">All Movies</Link>
      //       </li>
      //       <li>
      //         <Link to="/watchlist">My Watch List</Link>
      //       </li>
      //       <li>
      //         <Link to="/reviews">My Reviews</Link>
      //       </li>
      //     </ul>
  
      //     <Switch>
      //       <Route path="/watchlist">
      //         <WatchList />
      //       </Route>
      //       <Route path="/reviews">
      //         <Reviews />
      //       </Route>
      //       <Route path="/">
      //         <Home />
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
    )
}

export default NavBar;