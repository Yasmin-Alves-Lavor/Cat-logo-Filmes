import React from 'react';
import '../css/MovieCard.css';

function MovieCard({ movie, onClick }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : 'https://via.placeholder.com/150x225?text=No+Image';

  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <img src={posterUrl} alt={movie.title || movie.name} />
      <h3>{movie.title || movie.name}</h3>
      <p>{new Date(movie.release_date || movie.first_air_date).getFullYear()}</p>
    </div>
  );
}

export default MovieCard;



