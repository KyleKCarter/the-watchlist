import React, { Component } from "react";
import "./films.scss";
import axios from "axios";
import Nav from "../../components/nav/nav";

class Films extends Component {
  state = {
    filmName: "",
    searchedFilms: [],
  };

  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchFilm = async (e) => {
    const { filmName } = this.state;
    e.preventDefault();
    axios
      .get(`/films/${filmName}`)
      .then((films) => {
        this.setState({ searchedFilms: films.data.results, filmName: '' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addFilmToList = async (movie_id) => {
    axios.get(`/films/search/${movie_id}`).then((details) => {
      const {
        poster_path,
        title,
        release_date,
        vote_average,
        runtime,
        overview,
      } = details.data;
      axios
        .post("/watchlist/add_film", {
          poster_path,
          title,
          release_date,
          vote_average,
          runtime,
          overview,
        })
        .then((res) => {
          console.log("resopnse: ", res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  render() {
    let mappedSearchedFilms = this.state.searchedFilms.map((val) => {
      console.log(typeof val.vote_average);
      let releaseDate = val.release_date.slice(0, 4);
      let vote = Math.round(val.vote_average *10) /10
      return (
        <div className="film_container">
          <img
            className="film_poster_image"
            src={`https://image.tmdb.org/t/p/w500${val.poster_path}`}
            alt="img not available"
          />
          <div className="film_description_container">
            <h3 className="film_name">
              {val.title} ({releaseDate})
            </h3>
            <div className="film_description_second_row">
              <span className="release_date">{val.runtime}</span>
            </div>
            <span>({vote}/10)</span>
          </div>
          <span className="overview">{val.overview}</span>
          <button
            className="add_film_button"
            onClick={() => this.addFilmToList(val.id)}
          >
            +
          </button>
        </div>
      );
    });

    return (
      <div>
        <Nav />
        <h1>Feature Films</h1>
        <div className="page_content">
          <div className="search_films_container">
            <div className="search_input_field_container">
              <input
                className="search_input_field"
                value={this.state.filmName}
                onChangeCapture={(e) => this.handlechange(e)}
                type="text"
                name="filmName"
              />
            </div>
            <button className="search_button" onClick={this.searchFilm}>
              Search
            </button>
          </div>
          <div className="searched_results_container">
            {mappedSearchedFilms}
          </div>
        </div>
      </div>
    );
  }
}

export default Films;
