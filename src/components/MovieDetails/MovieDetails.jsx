import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate  } from 'react-router-dom';
import Button from 'components/Button/Button';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();


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