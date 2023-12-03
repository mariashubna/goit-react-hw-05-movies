import React, { lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from '../components/Header/Header'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const Credits = lazy(() => import('../components/Credits/Credits'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'));


export const App = () => {
    return (
      <Routes>             
        <Route path="/" element={<Header />} />
        <Route path="/" element={<HomePage />} />        
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<Credits />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
  );
};
