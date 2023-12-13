import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../servises/Search_Api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState('');
  const [expandedReviews, setExpandedReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovieReviews(movieId)
      .then(({ results }) => {
        if (!results.length) {
          setError('There are no reviews yet. Look later');
          return;
        }
        setReviews(results);
        setError('');
      })
      .catch(() =>
        setError(
          "I'm sorry, but something went wrong... Please, try again later"
        )
      );
  }, [movieId]);

  const handleShowMore = reviewId => {
    setExpandedReviews(prev => [...prev, reviewId]);
  };

  return (
    <div>
      <h2 className={css.title}>Movie Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(review => (
            <li className={css.item} key={review.id}>
              <h3>{review.author}</h3>
              <p>
                {expandedReviews.includes(review.id)
                  ? review.content
                  : `${review.content.slice(0, 300)}...`}
              </p>
              {review.content.length > 500 &&
                !expandedReviews.includes(review.id) && (
                  <button
                    className={css.btn}
                    onClick={() => handleShowMore(review.id)}
                  >
                    Show more
                  </button>
                )}
            </li>
          ))}
        </ul>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Reviews;
