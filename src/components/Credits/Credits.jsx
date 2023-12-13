import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../servises/search_Api';
import css from './Credits.module.css';

const Credits = () => {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const PICTURE_URL = 'https://image.tmdb.org/t/p/';

  useEffect(() => {
    if (!movieId) {
      return;
    }

    setLoading(true);

    getMovieCredits(movieId)
      .then(response => {
        if (!response || !response.cast.length) {
          setCredits([]);
          setError('No credits found for this movie.');
        } else {
          setCredits(response.cast);
          setError('');
        }
      })
      .catch(error => {
        setError(
          "I'm sorry, but something went wrong... Please, try again later"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error === '' ? (
        <div>
          <ul className={css.list}>
            {credits.map(actor => (
              <li key={actor.id}>
                <div>
                  <img
                    className={css.img}
                    src={
                      actor.profile_path
                        ? `${PICTURE_URL}w200${actor.profile_path}`
                        : 'https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-plug-man-illustration-image_1395297.jpg'
                    }
                    alt={actor.name}
                  />
                </div>
                <p>{actor.name}</p>
                <p>as {actor.character || 'N/A'}</p>
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

export default Credits;
