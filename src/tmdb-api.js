import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzQ4MTgzMDM0YWNkZDAyMDNkNDlmNzE0NTA3MTg2MiIsIm5iZiI6MTc0NjA5MzMxMy4wNTEsInN1YiI6IjY4MTM0NTAxMzg5YmUxZDVhN2EwZWZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LSvrgUX--s7-qPiJ_r48kc6IT75_d0hdcbE4wyYP5p8',
  },
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?language=uk-UA`,
    options
  );
  return data.results;
};

export const searchMovies = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?query=${query}`,
    options
  );
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=uk-UA`,
    options
  );
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    options
  );
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    options
  );
  return data.results;
};
