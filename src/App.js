import React, { useState, useEffect } from 'react';
import './css/App.css';

import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import MovieDetailsModal from './components/MovieDetailsModal';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = async ({ title }) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5e7bed4e9ac70da2a0e2b314ffecf9b9&query=${title}`);
    const data = await response.json();
    setMovies(data.results);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <h1>Catálogo de Filmes e Séries</h1> 
      <div className="dark-mode-toggle">
        <input
          type="checkbox"
          id="darkModeSwitch"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkModeSwitch"></label>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
        ))}
      </div>
      {selectedMovie && <MovieDetailsModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
}

export default App;








