import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { keyword } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '6b2f249c49a040541fc751a7fb9d7fc1';
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [keyword]);

  return (
    <div>
      <h2>Movies Search Results for "{keyword}"</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;