import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie/NewMovie';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: moviesFromServer,
  };

  addMovie = (event, movie) => {
    event.preventDefault();

    this.setState(prevState => ({
      movies: [
        ...prevState.movies,
        movie,
      ],
    }));
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          <NewMovie
            addMovie={this.addMovie}
          />
        </div>
      </div>
    );
  }
}
