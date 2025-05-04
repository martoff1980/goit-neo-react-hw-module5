import { useEffect, useState } from 'react';
import { useLocation, useSearchParams, Link, Outlet } from 'react-router-dom';
import MovieList from '../../components/movieList/MovieList';
import { searchMovies } from '../../tmdb-api';
import './MoviesPage.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;
    searchMovies(query).then(setMovies);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (value) setSearchParams({ query: value });
  };

  return (
    <div className="movies-page">
      <form onSubmit={handleSubmit}>
        <input name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
      <Outlet />
    </div>
  );
};

export default MoviesPage;
