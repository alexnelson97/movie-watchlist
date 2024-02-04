import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({
  movieList,
  addMovie,
  removeMovie,
  setPage,
  page,
  watchlist,
}) => {
  const movieDisplay = movieList.map((movie, index) => (
    <MovieCard
      key={index}
      movie={movie}
      addMovie={addMovie}
      removeMovie={removeMovie}
      watchlist={watchlist}
    />
  ));

  const decrement = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const increment = () => {
    setPage(page + 1);
  };

  return (
    <div className="page">
      <h1>Alex's Movie Theatre</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
