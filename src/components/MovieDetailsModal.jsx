import React, { useEffect, useState } from 'react';
import '../css/MovieDetailsModal.css';

const apiKey = '5e7bed4e9ac70da2a0e2b314ffecf9b9';


function MovieDetailsModal({ movie, onClose }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=pt-BR`
      );
      const data = await response.json();
      setDetails(data);
    };

    fetchMovieDetails();
  }, [movie.id]);

  if (!details) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}></button>
        <h2>{details.title} ({new Date(details.release_date).getFullYear()})</h2>
        <img src={`https://image.tmdb.org/t/p/w200${details.poster_path}`} alt={details.title} />
        <p><strong>Gênero:</strong> {details.genres.map(genre => genre.name).join(', ')}</p>
        <p><strong>Duração:</strong> {details.runtime} minutos</p>
        <p><strong>Resumo:</strong> {details.overview}</p>
        <p><strong>Classificação IMDb:</strong> {details.vote_average}</p>
        <p><strong>Bilheteira:</strong> {details.revenue ? `R$ ${details.revenue.toLocaleString()}` : 'N/A'}</p>
      </div>
    </div>
  );
}

export default MovieDetailsModal;



