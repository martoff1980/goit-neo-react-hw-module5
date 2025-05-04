import {
  useParams,
  Link,
  Outlet,
  NavLink,
  useLocation,
  Route,
} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { getMovieDetails } from '../../tmdb-api';
import './MovieDetailsPage.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);
  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details-page">
      <Link to={backLink.current}>
        <button>{<FaArrowLeft />} Go back</button>
      </Link>

      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <h3>User Score: {Math.round(movie.vote_average * 10)}%</h3>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <nav>
        <p>Additional information</p>
        <ul className="additional-info">
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
