import Movies from '../../components/Movies/Movies';
import { useEffect, useState } from 'react';
import { searchTrendingMovies } from '../../servises/search_Api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <div>
      <h1>Popular today:</h1>
      <Movies movies={movies} />
    </div>
  );
};

export default HomePage;