import React from 'react';

const MovieList = (props) => {
    return(
        <>
            {props.movies.map((movie, index)=> (
            <div className='image-container d-flex justify-content-start m-3'>
                <img src ={movie.poster} alt='movie'></img>
                <div 
                onclick={()=> props.handleFavoritesClick(movie)}
                className='overlay d-flex align-items-centre justify-content-centre'>
                    <FavoriteComponent/>
                </div>
            </div>
            ))}
        </>
    )
};

export default MovieList;