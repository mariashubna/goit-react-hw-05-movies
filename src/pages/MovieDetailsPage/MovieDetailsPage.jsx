import { Fragment, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams,  Link, NavLink } from 'react-router-dom';
import { searchMovieById } from '../../servises/search_Api';
import { Loader } from '../../components/Loader/Loader';
import Movies from '../../components/Movies/Movies';
import css from './MovieDetailsPage.module.css'


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(0);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    searchMovieById(Number(movieId))
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

  if(!movieData)return;

  return (
    <Fragment>
       <Link to={location.state?.from ?? '/'}className={css.link}>
        Go back
      </Link>

      {error === '' && movieData ? (
        <>
           <Movies movies={[movieData]} /> 

          <div className={css.wraper}>
            <h2 >Additional information: </h2>
            <ul className={css.list}>
              <li className={css.item}>
                <NavLink className={css.link} to="cast" >
                  Cast
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink className={css.link} to="reviews" >
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