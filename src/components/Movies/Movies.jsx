import { Link } from 'react-router-dom';
const Movies = ({ movies }) => {
  const PICTURE_URL = 'https://image.tmdb.org/t/p/';

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <img
              src={`${PICTURE_URL}w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>
              {new Date(movie.release_date).toLocaleDateString(
                'en-US',
                dateOptions
              )}
            </p>
            <p>   
              {movie.vote_average === 0
                ? 'NR'
                : `${Math.round(movie.vote_average * 10)}%`}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};



export default Movies