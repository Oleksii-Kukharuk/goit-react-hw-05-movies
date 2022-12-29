import React from 'react';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from 'services/Api';
import { Link, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useSearchParams();
  const [filmData, setFilmData] = useState([]);

  const currentQuery = query.get('query') ?? '';

  useEffect(() => {
    if (!currentQuery) {
      return;
    }
    async function fetchMovie() {
      try {
        const movieByQuery = await getMovieBySearch(currentQuery);
        setFilmData(movieByQuery.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [currentQuery]);

  const onSearchSubmit = e => {
    e.preventDefault();
    const searchForm = e.target;

    setQuery({ query: searchForm.elements.querySearch.value });
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
