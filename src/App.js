import React, { useEffect, useState } from "react";
import { MovieCard } from "./components/MovieCard";
import "./app.css";
import Alert from "./components/Alert";

//API_KEY = acc51d8
const API_URL = "https://www.omdbapi.com/?apikey=acc51d8";

function App() {
  const [alert, setAlert] = useState({ show: false, msg: "" });
  const [searchTerm, setSearchTerm] = useState("Superman");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log();
    searchMovies(searchTerm);
  };
  const searchMovies = async (title) => {
    setAlert({ show: false, msg: "" });
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}&s=${title}`);

      const data = await response.json();
      setLoading(false);
      if (data.Search === undefined) {
        setAlert({
          show: true,
          msg: `We can't find the movie titled ${searchTerm}`,
        });
      } else {
        setMovies(data.Search);
        console.log(data.Search);
      }
    } catch (err) {
      console.log(err);
      setAlert({ show: true, msg: ` ${err.message}` });
    }
  };
  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="header">
      <div className="container">
        <h1>NousTube</h1>

        <form className="search-bar">
          <input
            placeholder="Search for  anything..."
            value={searchTerm}
            required
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSumbit}>
            <svg className="path1" viewBox="0 0 1024 1024">
              <path d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path>
            </svg>
          </button>
        </form>
      </div>

      <div className="row">
        {loading && (
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {alert.show ? (
          <Alert msg={alert.msg} searchTerm={searchTerm} />
        ) : (
          movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
        )}
        {/* {movies?.length === 0 ? (
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
        )} */}
      </div>
    </div>
  );
}

export default App;
