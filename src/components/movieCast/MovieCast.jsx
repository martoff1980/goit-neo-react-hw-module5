import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../tmdb-api';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast.length) return <p>No cast information available.</p>;

  return (
    <ul style={{ marginLeft: '50px', padding: '0' }}>
      {cast.map(({ id, name, profile_path }) => (
        <li key={id} style={{ paddingBottom: '10px' }}>
          <p style={{ paddingBottom: '5px' }}>{name}</p>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
