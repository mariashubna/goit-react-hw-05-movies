import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchTrendingMovies } from '../../servises/search_Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    searchTrendingMovies('reviews', movieId)
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



  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
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