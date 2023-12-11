import { Fragment, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams,  Link, NavLink } from 'react-router-dom';
import { searchTrendingMovies } from '../../servises/search_Api';
import { Loader } from '../../components/Loader/Loader';
import Movies from '../../components/Movies/Movies';


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(0);
  const [error, setError] = useState('');
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    searchTrendingMovies('movieById', Number(movieId))
      .then(results => {
        setMovieData(results);
        setError('');
      })
      .catch(error => {
        setError(
            "I'm sorry, but something went wrong... Please, try again later"
        );
        setTimeout(() => {
          navigate('/');
        }, 1000);
      });
  }, [movieId, navigate]);

  return (
    <Fragment>
      <Link to={state?.from ?? '/'}>Go back</Link>

      {error === '' && movieData ? (
        <>
          <Movies movieData={movieData} />

          <div>
            <h2>Additional information: </h2>
            <ul>
              <li>
                <NavLink to="cast" state={{ from: state?.from }}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to="reviews" state={{ from: state?.from }}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <p>{error}</p>
      )}
    </Fragment>
  );
};

export default MovieDetailsPage;