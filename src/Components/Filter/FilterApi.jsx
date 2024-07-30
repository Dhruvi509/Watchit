import { useEffect } from "react";




function FilterApi({ setActiveGenre, activeGenre , setFiltered, popular}) {

  useEffect(() => {
  if(activeGenre === 0){
    setFiltered(popular);
    return;
  }

  const filtered =popular.filter((movie) => movie.genre_ids.includes(activeGenre));
  setFiltered(filtered);

},[activeGenre])
  return (
    <div className="filter-container">
      <button onClick={() => setActiveGenre(0)}>
        All
      </button>
      <button onClick={() => setActiveGenre(35)}>
        Comedy
      </button>
      <button onClick={() => setActiveGenre(28)}>
        Action
      </button>
    </div>
  );
}

export default FilterApi


// import React, { useEffect } from "react";

// function FilterApi({ setActiveGenre, activeGenre, setFiltered, popular, handleGenreClick }) {

//   useEffect(() => {
//     if (activeGenre === 0) {
//       setFiltered(popular);
//       return;
//     }

//     const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
//     setFiltered(filtered);

//   }, [activeGenre, popular]);

//   return (
//     <div className="filter-container">
//       <button onClick={() => handleGenreClick(28)}>
//         Action
//       </button>
//       <button onClick={() => handleGenreClick(12)}>
//        Adventure
//       </button>
//       <button onClick={() => handleGenreClick(16)}>
//         Animation
//       </button>
//       <button onClick={() => handleGenreClick(35)}>
//         Comedy
//       </button>
//       <button onClick={() => handleGenreClick(80)}>
//        Crime
//       </button>
//       <button onClick={() => handleGenreClick(99)}>
//        Documentary
//       </button>
//       <button onClick={() => handleGenreClick(18)}>
//        Drama
//       </button>
//       <button onClick={() => handleGenreClick(10751)}>
//        Family
//       </button>
//       <button onClick={() => handleGenreClick(14)}>
//       Fantasy
//       </button>
//       <button onClick={() => handleGenreClick(36)}>
//        History
//       </button>
//       <button onClick={() => handleGenreClick(27)}>
//        Horror
//       </button>
//       <button onClick={() => handleGenreClick(10402)}>
//        Music
//       </button>
//       <button onClick={() => handleGenreClick(9648)}>
//        Mystery
//       </button>
//       <button onClick={() => handleGenreClick(10749)}>
//        Romance
//       </button>
//       <button onClick={() => handleGenreClick(878)}>
//       Science Fiction
//       </button>
//       <button onClick={() => handleGenreClick(53)}>
//        Thriller
//       </button>
//       <button onClick={() => handleGenreClick(10752)}>
//       War
//       </button>
      
//     </div>
//   );
// }

// export default FilterApi;
