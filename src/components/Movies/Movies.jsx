import { useLocation, Link } from 'react-router-dom';
import css from './Movies.module.css'

const Movies = ({ movies }) => {
  const PICTURE_URL = 'https://image.tmdb.org/t/p/';

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{from: location}} className={css.link}>
            <div>
            <img className={css.poster}
              src={
                movie.poster_path
                ? `${PICTURE_URL}w200${movie.poster_path}`
                : 'https://img.freepik.com/premium-vector/iphone-mobile-wallpaper-abstract-background-design-background_684242-38.jpg'
              }
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