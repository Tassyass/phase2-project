import './App.css';
import React, {useState,useEffect} from 'react';
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading';
import SearchBar from './components/SearchBar';
import AddFavourites from './components/AddFavourites'
import RemoveFavourites from './components/RemoveFavourites'

 const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites , setFavourites] = useState([]);
  const [searchValue , setSearchValue] = useState ('');

  const getMovieRequest=async(searchValue)=>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=be153fa`
    
    const response = await fetch (url)
    const responsejson=await response.json();

   if(responsejson.Search) {
    setMovies(responsejson.Search);
   }
  };
  useEffect(()=>{
    getMovieRequest(searchValue)
  },[searchValue]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = {...favourites , movie};
    setFavourites(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite)=>favourite.imdbID !== movie.imdbID
    );
    setFavourites (newFavouriteList);
  };
   
  
   
  return (
    
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading = 'Movies'/>
        <SearchBar searchValue = {searchValue} setSearchValue={setSearchValue }/>
         </div>
   <div className='row'>
        <MovieList movies = {movies} handleFavouritesClick = {addFavouriteMovie}FavoriteComponent = {AddFavourites}/>
   </div>
   <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading = 'Favourites'/>
         </div>

         <div className='row'>
        <MovieList 
        movies = {favourites} 
        handleFavouritesClick = {removeFavouriteMovie}
        FavoriteComponent = {RemoveFavourites}
        />
   </div>
    </div>

    

  );
  }
export default App;