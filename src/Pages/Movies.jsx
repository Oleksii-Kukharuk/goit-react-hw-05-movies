import React from 'react';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from 'services/Api';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchMovie() {
      try {
        const movieByQuery = await getMovieBySearch(query);
        setFilmData(movieByQuery.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [query]);

  const onSearchSubmit = e => {
    e.preventDefault();
    const searchForm = e.target;

    setQuery(searchForm.elements.querySearch.value);
    searchForm.reset();
  };

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="querySearch"
          placeholder="Fill in and push ==>"
        />
        <button type="submit">Push to search</button>
      </form>
      <ul>
        {filmData.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
