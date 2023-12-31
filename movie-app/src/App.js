
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import MovieList from './components/MovieList';
import AddToFavourite from './components/AddToFavourite';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';

function App() {
  const [selectMovie, setSelectMovie] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Tassyass/phase2-project/movies")
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