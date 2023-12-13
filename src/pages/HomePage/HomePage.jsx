import Movies from '../../components/Movies/Movies';
import { useEffect, useState } from 'react';
import { searchTrendingMovies } from '../../servises/search_Api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    searchTrendingMovies()
      .then(({ results }) => {
        if (!results.length) {
          setError(
            "I'm sorry, but something went wrong... Please, try again later"
          );
          return;
        }
        setMovies(results);
        setError('');
      })
      .catch(() =>
        setError(
          "I'm sorry, but something went wrong... Please, try again later"
        )
      );
  }, []);

  return (
    <div>
      <h1>Popular today:</h1>
      {error === '' && <Movies movies={movies} />}
    </div>
  );
};

export default HomePage;
