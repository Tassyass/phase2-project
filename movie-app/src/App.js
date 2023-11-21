import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';

function App() {


  const getMovieRequest=async()=>{
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=be153fa"
    const response = await fetch (url)
    const responsejson=await response.json()
    console.log(responsejson)

  }
  useEffect(()=>{
    getMovieRequest
  },[])

  
  return (
    <>


    </>

  );
  }
export default App;
