const PICTURE_URL = 'https://image.tmdb.org/t/p/';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const MovieDetails = ({ movieData }) => {
  return (
    <div>
      <img
        src={
          movieData.poster_path
            ? `${PICTURE_URL}w300${movieData.poster_path}`
            : 'https://cdn.pixabay.com/photo/2014/01/21/16/01/backdrop-249158_1280.jpg'
        }
        alt={movieData.title}
      />
      <div>
        <h1>{`${movieData.title} (${
          movieData.release_date
            ? new Date(movieData.release_date).getFullYear()
            : 'year unknown'
        })`}</h1>
        <p>
          <p>Release date:</p>
          {new Date(movieData.release_date).toLocaleDateString(
            'en-US',
            dateOptions
          )}
        </p>
        <p>
          <p>Rating: </p>
          {movieData.vote_average === 0
            ? 'Not rated'
            : `${Math.round(movieData.vote_average * 10)}%`}
        </p>
        <p>
          <p>Genres:</p>{' '}
          {movieData.genres.map(({ name }) => name).join(', ') || 'None'}
        </p>
        <p>
          <p>Promo:</p> {movieData.tagline || 'None'}
        </p>
        <p>
          <p>Overview:</p> {movieData.overview || 'None'}
        </p>
      </div>
    </div>
  );
};
export default MovieDetails;
