import React, { useEffect, useState } from "react";
import "./app.css";
import { MovieCard } from "./components/MovieCard";

//API_KEY = acc51d8
const API_URL = "http://www.omdbapi.com/?apikey=acc51d8";

function App() {
  const [searchTerm, setSearchTerm] = useState("Superman");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="header">
      <div className="container">
        <h1>NousTube</h1>
        <div className="search-bar">
          <input
            placeholder="Search for  anything..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => searchMovies(searchTerm)}>
            <svg viewBox="0 0 1024 1024">
              <path
                className="path1"
                d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="row">
        {movies?.length === 0 ? (
          <h2 style={{ paddingLeft: "6px", paddingRight: "6px" }}>
            LOADING......................
          </h2>
        ) : movies?.length > 0 ? (
          movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
        ) : (
          <h2 style={{ paddingLeft: "6px", paddingRight: "6px" }}>
            {movies?.length}Loading..... If it takes too long something might be
            wrong
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
