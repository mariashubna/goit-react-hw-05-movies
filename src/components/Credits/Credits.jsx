import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../servises/search_Api'; 

const Credits = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState('');

  const PICTURE_URL = 'https://image.tmdb.org/t/p/';

  useEffect(() => {
    if (!movieId) {
      return;
    }

    getMovieCredits(movieId) 
      .then(({ credits }) => {
        if (!credits || !credits.cast.length) {
          setError("I'm sorry, but something went wrong... Please, try again later");
          return;
        }
        setCredits(credits.cast);
        setError('');
      })
      .catch(() =>
        setError("I'm sorry, but something went wrong... Please, try again later")
      );
  }, [movieId]);

  return (
    <div>
      {error === '' ? (
        <div>
          <ul>
            {credits.map((actor) => (
              <li key={actor.id}>
                <div>
                  <img
                    src={
                      actor.profile_path
                        ? `${PICTURE_URL}w200${actor.profile_path}`
                        : 'https://img.freepik.com/premium-vector/iphone-mobile-wallpaper-abstract-background-design-background_684242-38.jpg'
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

export default Credits