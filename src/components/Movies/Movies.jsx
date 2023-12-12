import { Link } from 'react-router-dom';
import css from './Movies.module.css'

const Movies = ({ movies }) => {
  const PICTURE_URL = 'https://image.tmdb.org/t/p/';

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} className={css.link}>
            <div>
            <img
              src={`${PICTURE_URL}w200${movie.poster_path}`}
              alt={movie.title}
            />
            </div>
            <h2 className={css.title}>{movie.title}</h2>
            <p className={css.date}>
              {new Date(movie.release_date).toLocaleDateString(
                'en-US',
                dateOptions
              )}
            </p>
            <p className={css.rating}>    
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