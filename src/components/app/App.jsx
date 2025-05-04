import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navigation from '../navigation/Navigation';
import './App.css';

const HomePage = lazy(() => import('../../pages/homePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/moviesPage/MoviesPage'));
const MovieCast = lazy(() => import('../movieCast/MovieCast'));
const MovieReviews = lazy(() => import('../movieReviews/MovieReviews'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/movieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/notFoundPage/NotFoundPage')
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
