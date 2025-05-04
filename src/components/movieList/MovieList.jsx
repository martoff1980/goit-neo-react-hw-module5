import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-container">
      <ul className="movie-list">
        {movies.map(movie => (
          <li className="movie" key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location.pathname + location.search }}
            >
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
