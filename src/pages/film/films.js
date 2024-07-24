import React, { Component } from "react";
import "./films.scss";
import axios from "axios";

class Films extends Component {
  state = {
    name: "",
    img: "",
    year: 0,
    rating: 0,
    films: [],
  };

  componentDidMount() {
    console.log("Films page");
    this.getFilms();
  }

  getFilms = () => {
    axios
      .get("/films")
      .then((res) => {
        this.setState({ films: res.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  reset = () => {
    this.setState({ name: "", img: "", year: 0, rating: 0 });
    this.getFilms();
  };

  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = async (e) => {
    const { name, img, year, rating } = this.state;
    e.preventDefault();
    axios
      .post("/addfilm", {
        name,
        img,
        year,
        rating,
      })
      .then((res) => {
        this.reset();
        console.log("response: ", res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  delete = async (id) => {
    axios.delete(`/deletefilm/${id}`)
    .then(res => {
        console.log('Film removed', res.data);
        this.reset();
    })
    .catch(error => {
        console.error(error)
    })
  };

  render() {
    let mappedFilms = this.state.films.map((val) => {
      return (
        <div className="film">
          <img src={val.film_img} className="film_image" />
          <div className="film_content">
            <h3 className="title">{val.name}</h3>
            <div className="release_date">
              Release Year: {val.year_released}
            </div>
            <div className="rating">Our Rating: {val.rating}</div>
          </div>
          <button className="delete_button" onClick={() => this.delete(val.film_id)}>
            X
          </button>
        </div>
      );
    });
    return (
      <div className="page_content">
        <h1>Films</h1>
        <div className="add_film_content">
          <div className="title_field">
            <label>Title:</label>
            <input
              value={this.state.name}
              onChange={(e) => this.handlechange(e)}
              type="text"
              name="name"
            />
          </div>
          <div className="film_img">
            <label>Image:</label>
            <input
              value={this.state.img}
              onChange={(e) => this.handlechange(e)}
              type="text"
              name="img"
            />
          </div>
          <div className="year_released">
            <label>Release Date:</label>
            <input
              value={this.state.year}
              onChange={(e) => this.handlechange(e)}
              type="text"
              name="year"
            />
          </div>
          <div className="rating">
            <label>Rating:</label>
            <select
              value={this.state.rating}
              onChange={(e) => this.handlechange(e)}
              name="rating"
            >
              <option value="--">--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="submit_button" onClick={this.submit}>
            Submit
          </button>
        </div>
        <div className="films_container">{mappedFilms}</div>
      </div>
    );
  }
}

export default Films;
