import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const url =
  //         'https://api.themoviedb.org/3/trending/movie/day?language=uk-UA';

  //       const options = {
  //         headers: {
  //           Authorization:
  //             'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzQ4MTgzMDM0YWNkZDAyMDNkNDlmNzE0NTA3MTg2MiIsIm5iZiI6MTc0NjA5MzMxMy4wNTEsInN1YiI6IjY4MTM0NTAxMzg5YmUxZDVhN2EwZWZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LSvrgUX--s7-qPiJ_r48kc6IT75_d0hdcbE4wyYP5p8', // Замініть на ваш токен
  //         },
  //       };

  //       const response = await axios.get(url, options);
  //       setMovies(response.data.results);
  //     } catch (err) {
  //       setError('Помилка при завантаженні даних');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

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
