import React, { useEffect, useState } from 'react';
import MovieList from '../../components/movieList/MovieList';
import { getTrendingMovies } from '../../tmdb-api';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-page">
      <h1>Trending Today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default HomePage;
