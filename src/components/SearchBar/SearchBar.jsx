import { Formik, Field, Form } from 'formik';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');

  const handleChange = ({ target: { value } }) => {
    if (!value) setSearchParams({});
    setQuery(value);
  };

  const handleSearch = () => {
    if (query === '') {
      setError('Please enter your search query');
      return;
    }

    setSearchParams({ query: query });
    setError('');
  };

  useEffect(() => {
    const value = searchParams.get('query');
    if (value) {
      setQuery(value);
    }
  }, [searchParams]);

  return (
    <>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSearch}>
        <Form>
          <Field
            value={query}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            onChange={handleChange}
          />

          <button type="submit">
            <BsSearch />
            <p>Search</p>
          </button>
        </Form>
      </Formik>

      {error === '' ? '' : <div>{error}</div>}
    </>
  );
};