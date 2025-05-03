import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../tmdb-api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews.length)
    return <p style={{ marginLeft: '5px' }}>No reviews available.</p>;

  return (
    <ul style={{ marginLeft: '5px' }}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} style={{ marginLeft: '45px', marginBottom: '20px' }}>
          <h4 style={{ paddingBottom: '10px' }}>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
