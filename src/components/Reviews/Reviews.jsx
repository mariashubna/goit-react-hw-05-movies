import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../servises/search_Api';

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
        setError("I'm sorry, but something went wrong... Please, try again later")
      );
  }, [movieId]);

  const handleShowMore = (reviewId) => {
    setExpandedReviews((prev) => [...prev, reviewId]);
  };

  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>
                {expandedReviews.includes(review.id)
                  ? review.content
                  : `${review.content.slice(0, 500)}...`}
              </p>
              {review.content.length > 500 && !expandedReviews.includes(review.id) && (
                <button onClick={() => handleShowMore(review.id)}>
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