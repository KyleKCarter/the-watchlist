import React, { Component } from "react";
import "./shows.scss";
import axios from "axios";

class Shows extends Component {
  state = {
    tvName: "",
    searchedShow: []
  };

  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchShow = async (e) => {
    const { tvName } = this.state;
    e.preventDefault()
    axios.get(`/shows/${tvName}`)
        .then((shows) => {
            this.setState({ searchedShow: shows.data.results})
        })
        .catch((error) => {
            console.error(error)
        })
  }

  render() {
    console.log('searched shows', this.state.searchedShow)

    let mappedSearchedShows = this.state.searchedShow.map((val) => {
        console.log(val)
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${val.poster_path}`} alt="img not available" />
                <h3>{val.original_name}</h3>
                <span>{val.overview}</span>
            </div>
        )
    })

    return (
      <div className="page_content">
        <h1>TV Shows</h1>
        <div className="search_films_container">
          <div className="search_input_field_container">
            <span>Search:</span>
            <input
              value={this.state.tvName}
              onChangeCapture={(e) => this.handlechange(e)}
              type="text"
              name="tvName"
            />
          </div>
          <button onClick={this.searchShow}>Search</button>
        </div>
        <div className="searched_results_container">{mappedSearchedShows}</div>
      </div>
    );
  }
}

export default Shows;
