import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../../components/movieList/MovieList';
import { getTrendingMovies } from '../../tmdb-api';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Завантаження...</p>;
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
