import { Link } from "react-router-dom";


function NavBar() {

    return (
      <div>
        <ul>
          <li>
            <Link to="/">Movie Search</Link>
          </li>
          <li>
            <Link to="/my-reviews">My Reviews</Link>
          </li>
          <li>
            <Link to="/watch-list">My Watch List</Link>
          </li>
        </ul>
      </div>
    )
}

export default NavBar;