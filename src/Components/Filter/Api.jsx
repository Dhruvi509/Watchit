import React,{useState,useEffect} from 'react';
import MovieBox from '../MainBox'
import FilterApi from './FilterApi';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3cd9733ac22d34508da9e17d4a018daf";

function Api() {

  const[movies, setMovies]=useState([]);
  const[filtered, setFiltered]=useState([]);
  const [activeGenre,setActiveGenre] = useState(0);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
      setFiltered(data.results);
    })
  }, [])
  return (
    // <div className='container'style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
      <div>
        <FilterApi popular={movies} setFiltered ={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
      <div className='grid' style={{
        display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ",gap:"20px"
      }}>
        
      {filtered.map((movieReq)=>
      <MovieBox key={movieReq.id}{...movieReq}/>)}
    </div>
    </div>
  );
}

export default Api;


// import React, { useState, useEffect } from 'react';
// import MovieBox from '../MainBox';
// import FilterApi from './FilterApi';

// function Api() {
//   const [movies, setMovies] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [activeGenre, setActiveGenre] = useState(0);
//   const [apiUrl, setApiUrl] = useState("https://api.themoviedb.org/3/movie/popular?api_key=3cd9733ac22d34508da9e17d4a018daf");

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then(data => {
//         console.log(data);
//         setMovies(data.results);
//         setFiltered(data.results);
//       })
//   }, [apiUrl]);

//   const handleGenreClick = (genreId) => {
//     // Adjust the API URL based on the selected genre
//     const newApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=3cd9733ac22d34508da9e17d4a018daf&with_genres=${genreId}`;
//     setApiUrl(newApiUrl);

//     // Set the active genre
//     setActiveGenre(genreId);
//   };

//   return (
//     <div>
//       <FilterApi
//         setActiveGenre={setActiveGenre}
//         activeGenre={activeGenre}
//         setFiltered={setFiltered}
//         popular={movies}
//         handleGenreClick={handleGenreClick}
//       />
//       <div className='grid' style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", gap: "20px" }}>
//         {filtered.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
//       </div>
//     </div>
//   );
// }

// export default Api;
