import React, { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';

const Home = lazy(() => import('../components/Home/Home'));
const Movies = lazy(() => import('../components/Movies/Movies.js'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails.jsx')
);
const Credits = lazy(() => import('./Credits/Credits.jsx'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'));

export const App = () => {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Credits />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
