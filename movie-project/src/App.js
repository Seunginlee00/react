import React, {Component} from 'react';
import './App.css';

import {data} from './data.json'

import Header from './header/header.js';
import MovieList from './movie-list/movie-list.js'

class App extends Component {
  state = {
      movieData: data,
      headerMessage: 'Movie App'
  };

  render(){
    return (
      <div className='App'>
       <Header  headerMessage={this.state.headerMessage} />
       <MovieList movieData = {this.state.movieData} />
      </div>
    );
  }
}

export default App;
