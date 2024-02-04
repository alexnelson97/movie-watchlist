import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ watchlist, removeMovie }) => {
  const watchlistDisplay = watchlist.map((movie, index) => (
    <MovieCard key={index} movie={movie} removeMovie={removeMovie} />
  ));

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{watchlistDisplay}</div>
    </div>
  );
};

export default Watchlist;
