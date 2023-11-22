import React from "react"
import { useState,useEffect } from "react"
export default function ({addToFavourite}){
const[movies,setMovies]=useState([])
useEffect(()=>{
    fetch("http://localhost:3000/movies")
    .then(res=>res.json())
    .then(movies=>{
        setMovies(movies)
    })
},[])



    return (
        <>
        <div className="movie-dispaly">
            {movies.map(movie=>(
                <div key={movie.id} className="movie-card">
                     <img src={movie.posterUrl} />
                     <h2>Title:{movie.title}</h2>
                     <h2>Year:{movie.year}</h2>
                     <h3>Runtime:{movie.runtime}</h3>
                     <button onClick={()=>addToFavourite(movie)}>ADD TO FAVOURITE</button>
                </div>
            ))}
        </div>
        </>
    )
}