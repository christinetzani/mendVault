import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/" className="nav-link" activeclassname="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/messages" className="nav-link" activeclassname="active">
            Messages
          </Link>
        </li>
        <li>
          <Link to="/search" className="nav-link" activeclassname="active">
            Search
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-link" activeclassname="active">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
