import React, { Component } from "react";
import "./shows.scss";
import axios from "axios";
import Nav from '../../components/nav/nav';


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
            this.setState({ searchedShow: shows.data.results, tvName: ''})
        })
        .catch((error) => {
            console.error(error)
        })
  }

  addShowToList = async (show_id) => {
    axios.get(`/shows/search/${show_id}`)
      .then((details) => {
        console.log(details)
        const {poster_path, name, first_air_date, last_air_date, vote_average, number_of_episodes, overview} = details.data
        axios.post('/watchlist/add_tv_show', {
          poster_path, name, first_air_date, last_air_date, vote_average, number_of_episodes, overview
        })
        .then((res) => {
          console.log("response: ", res.data)
        })
        .catch((error) => {
          console.error(error)
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    let mappedSearchedShows = this.state.searchedShow.map((val) => {
        let startDate = val.first_air_date.slice(0, 4); 
        let averageVote = Math.round(val.vote_average * 10) / 10;
        return (
            <div className="show_container">
                <img className="show_poster_image" src={`https://image.tmdb.org/t/p/w500${val.poster_path}`} alt="img not available" />
                <div className="show_description_container">
                    <h3 className="show_name">{val.original_name}</h3>
                  <div className="show_description_second_row">
                    <span className="first_air_date">{startDate}</span>
                  </div>
                    <span>({averageVote}/10)</span>
                </div>
                    <span className="overview">{val.overview}</span>
                <button className="add_show_button" onClick={() => this.addShowToList(val.id)}>+</button>
            </div>
        )
    })

    return (
      <div>
        <Nav/>
        <h1>TV Shows</h1>
        <div className="page_content">
          <div className="search_shows_container">
            <div className="search_input_field_container">
              <input
                className="search_input_field"
                value={this.state.tvName}
                onChangeCapture={(e) => this.handlechange(e)}
                type="text"
                name="tvName"
              />
            </div>
            <button className="search_button" onClick={this.searchShow}>Search</button>
          </div>
          <div className="searched_results_container">{mappedSearchedShows}</div>
        </div>
      </div>
    );
  }
}

export default Shows;
