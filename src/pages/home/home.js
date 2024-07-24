import React, { Component } from "react";
import './home.scss';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <body>
        <h1 className="watchlist">The WatchList</h1>
        <div className="body">
          <Link to='/films'><h2 className="films">Films</h2></Link>
          <Link to='/shows'><h2 className="shows">Shows</h2></Link>
        </div>
      </body>
    );
  }
}

export default Home;
