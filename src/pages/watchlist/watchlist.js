import React, { Component } from "react";
import "./watchlist.scss";
import axios from "axios";
import Nav from '../../components/nav/nav';


class Watchlist extends Component {
  state = {
    filmsList: [],
    showsList: []
  };

  componentDidMount() {
    console.log("Watchlist page");
    this.reset()
  }

  reset = () => {
    this.getFilmslist();
    this.getShowsList();
  }

  getFilmslist = async () => {
    axios.get("/watchlist/films")
      .then(res => {
        this.setState({ filmsList: res.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  getShowsList = async () => {
    axios.get("/watchlist/shows")
      .then(res => {
        this.setState({ showsList: res.data })
      })
      .catch(error => {
        console.error(error)
      })
  }

  // submit = async (e) => {
  //   const { name, img, year, rating } = this.state;
  //   e.preventDefault();
  //   axios
  //     .post("/addfilm", {
  //       name,
  //       img,
  //       year,
  //       rating,
  //     })
  //     .then((res) => {
  //       this.reset();
  //       console.log("response: ", res.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  delete = async (id) => {
    axios.delete(`/watchlist/remove/${id}`)
    .then(res => {
        console.log('Film removed', res.data);
        this.reset();
    })
    .catch(error => {
        console.error(error)
    })
  };

  render() {
    const { filmsList, showsList } = this.state;

    let mappedFilmsList = filmsList.map((val) => {
      let releaseDate = val.release_date.slice(0, 4);
      return (
        <div className="film_container">
          <img
            className="film_poster_image"
            src={`https://image.tmdb.org/t/p/w500${val.poster_path}`}
            alt="img not available"
          />
          <div className="film_description_container">
            <h4 className="film_name">{val.title} ({releaseDate})</h4>
            <div className="film_description_second_row">
              <span className="release_date">{val.runtime}min.</span>
            </div>
            <span>({val.vote_average}/10)</span>
          </div>
          <span className="overview">{val.overview}</span>
          <button
            className="delete_button"
            onClick={() => this.delete(val.id)}
          >
            x
          </button>
        </div>
      );
    });

    let mappedShowsList = showsList.map((val) => {
      let startDate = val.first_air_date.slice(0, 4);
      let endDate = val.last_air_date.slice(0, 4);
      let averageVote = Math.round(val.vote_average * 10) / 10;
      return (
          <div className="show_container">
              <img className="show_poster_image" src={`https://image.tmdb.org/t/p/w500${val.poster_path}`} alt="img not available" />
              <div className="show_description_container">
                  <h4 className="show_name">{val.name}</h4>
                <div className="show_description_second_row">
                  <span className="first_air_date">{startDate}-{endDate}</span>
                </div>
                  <span>({averageVote}/10)</span>
              </div>
                  <span className="overview">{val.overview}</span>
              <button className="delete_button" onClick={() => this.delete(val.id)}>x</button>
          </div>
      )
  })

    return (
      <div>
        <Nav />
        <h1>Watchlist</h1>
        <div className="list_container">
          <div className="film_list_container">
            <h3>Films</h3>
            <div>{mappedFilmsList}</div>
          </div>
          <div className="show_list_container">
            <h3>TV Shows</h3>
            <div>{mappedShowsList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Watchlist;
