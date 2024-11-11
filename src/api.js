const translateFields = (movie) => {
  return {
    ...movie,
    Genre: movie.Genre.replace('Action', 'Ação').replace('Drama', 'Drama'),
    Runtime: movie.Runtime.replace('min', 'minutos'),
    Director: movie.Director,
    Plot: movie.Plot,
    imdbRating: `${movie.imdbRating} / 10`,
    Metascore: `${movie.Metascore}`,
    RottenTomatoes: movie.RottenTomatoes,
    BoxOffice: movie.BoxOffice,
  };
};

export const fetchMovies = async (searchParams) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=a2ee2ee2&t=${searchParams.title}`);
  const data = await response.json();
  
  if (data.Response === "True") {
    return [translateFields(data)];
  } else {
    return [];
  }
};

