
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './componets/Header';
import Search from './componets/Search';
import MovieList from './componets/MovieList';
import AddToFavourite from './componets/AddToFavourite';
import NavBar from './componets/NavBar';
import LogIn from './componets/LogIn';

function App() {
  const [selectMovie, setSelectMovie] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies);
        setFilteredMovies(movies);
      });
  }, []);

  const addToFavourite = (movie) => {
    setSelectMovie([...selectMovie, movie]);
  };

  const removeFromFavourite = (movieId) => {
    const updatedMovie = selectMovie.filter((movie) => movie.id !== movieId);
    setSelectMovie(updatedMovie);
  };

  const handleSearch = (query) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );

  function MainApp() {
    return (
      <>
        <NavBar />
      <Header />
      <Search handleSearch={handleSearch} />
      <AddToFavourite selectMovie={selectMovie} removeFromFavourite={removeFromFavourite} />
      <MovieList addToFavourite={addToFavourite} movies={filteredMovies} />
    </>
      
    );
  }
}

export default App;