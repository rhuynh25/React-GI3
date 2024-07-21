import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieSearch extends Component {
  state = {
    query: '',
    movies: []
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  searchMovies = async () => {
    const apiKey = '942a52edc0aeca64a6d1e54722146825';
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.query}`);
    const data = await response.json();
    this.setState({ movies: data.results });
  };

  render() {
    return (
      <div>
        <h1>Movie Search</h1>
        <input type="text" value={this.state.query} onChange={this.handleInputChange} />
        <button onClick={this.searchMovies}>Search</button>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MovieSearch;
