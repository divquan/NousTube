import React from "react";
import "./moviecard.css";

export const MovieCard = ({ movie }) => {
  return (
    <>
      <div
        className=" col-3 moviecard card"
        onClick={() =>
          window.open(
            `https://www.imdb.com/title/${movie.imdbID}/`,
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://picsum.photos/200/282"
          }
          alt={movie.Title}
        />
        <div className="containoir">
          <h4>
            <b>{movie.Title}</b>
          </h4>
          <p>
            <span>
              <i>Year: {movie.Year}</i>
            </span>
            <span style={{ float: "right" }}>
              <i>{movie.Type}</i>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
