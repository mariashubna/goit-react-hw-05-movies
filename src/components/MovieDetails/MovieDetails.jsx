import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate  } from 'react-router-dom';
import Button from 'components/Button/Button';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '6b2f249c49a040541fc751a7fb9d7fc1';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Button to="/movies" />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <Link to={`./cast`}>Cast</Link>
      <Link to={`./reviews`}>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;