import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './ErrorPage.module.css'


const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1000);
  }, [navigate]);

  return (
    <div className={css.wraper}>
      I'm sorry. This page doesn't exist. You will be automatically
      redirected to Home page.
    </div>
  );
};

export default ErrorPage;