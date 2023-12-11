import Movies from '../../components/Movies/Movies';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchTrendingMovies } from '../../servises/search_Api';

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    searchTrendingMovies('searchByQuery', 0, query)
      .then(({ results }) => {
        if (!results.length) {
          setError(
            `Sorry, I found no movies, mentioning ${query.toUpperCase()}. Try again`
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
  }, [searchParams]);

  return (
    <div>
      <Searchbar />
      {error === '' ? <Movies movies={movies} /> : <p>{error}</p>}
    </div>
  );
};

export default MoviesPage;