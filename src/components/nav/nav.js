import React, { Component } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

class Nav extends Component {

  render() {
    return (
        <div className="nav_bar">
            <ul>
                <li>
                    <a href="#">Menu</a>
                    <ul className="dropdown">
                        <li><a href="http://localhost:3000/">Home</a></li>
                        <li><a href="http://localhost:3000/films">Films</a></li>
                        <li><a href="http://localhost:3000/shows">TV Shows</a></li>
                        <li><a href="http://localhost:3000/watchlist">Watchlist</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
  }
}

export default Nav;
