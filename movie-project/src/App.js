import React from 'react';
import './App.css';
import data from './data.json';
import Header from './header/header.js';
import MovieList from './movie-list/movie-list.js'
import { Route, Routes } from 'react-router-dom';
import MovieSpecific from './movie-specific/movie-specific.js';

class App extends React.Component {
  state = {
      movieData: data,
      headerMessage: 'Movie App',
      currentMovieData: null
  };

  getSpecificMovieInfo = () => {
    const currentRoute = this.props.location.pathname.split('/');
    const ifExistMovieName = this.state.movieNames.filter(movie => movie.name === currentRoute[1])
//같은 이름이 있으면
    if(ifExistMovieName.length === 1){
      this.setState({
        currentMovieData: this.state.movieData[ifExistMovieName[0].idx]
      })
    } else {
      this.setState({
        currentMovieData: null
      })
    }
  }

  // componentDidUpdate(prevProps, nextState){

  // }

  componentDidMount(){
    this.getSpecificMovieInfo()
  }

  render(){
    return <div>
      <Header headerMessage={this.state.headerMessage} />
      <Routes>
        <Route path="/:movieName" exact={true} render={() => <MovieSpecific movieData={this.state.currentMovieData} /> } />
        <Route path="/" exact={true} render={() => <MovieList history={this.props.history} movieData={this.state.movieData} />} />
      </Routes>
    </div>
   
  }
}

export default App;
