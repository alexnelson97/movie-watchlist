import React from "react";

const MovieCard = ({ movie, addMovie, removeMovie, watchlist }) => {
  const inWatchlist = watchlist.filter((mov) => mov.id === movie.id);
  const isMovieInWatchlist = inWatchlist.length > 0;

  const button = isMovieInWatchlist ? (
    <button onClick={() => removeMovie(movie)}>Remove</button>
  ) : (
    <button onClick={() => addMovie(movie)}>Add to List</button>
  );

  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.original_title}
        />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
