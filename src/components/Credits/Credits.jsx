import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchTrendingMovies } from '../../servises/search_Api';

const Credits = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState('');

  const PICTURE_URL = 'https://image.tmdb.org/t/p/';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    searchTrendingMovies('credits', movieId)
      .then(({ credits }) => {
        if (!credits.length) {
          setError(
            "I'm sorry, but something went wrong... Please, try again later"
          );
          return;
        }
        setCredits(credits);
        setError('');
      })
      .catch(() =>
        setError(
          "I'm sorry, but something went wrong... Please, try again later"
        )
      );
  }, [movieId]);

  return (
    <div>
      {error === '' ? (
        <div>
          <ul>
            {credits.map(actor => (
              <li key={actor.id}>
                <div>
                  <img
                    src={
                      actor.profile_path
                        ? `${PICTURE_URL}w200${actor.profile_path}`
                        : 'https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg'
                    }
                    alt={actor.name}
                  />
                </div>
                <p>{actor.name}</p>
                <p>as {actor.character}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};