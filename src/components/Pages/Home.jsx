import React from 'react';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/Api';
import { Trending } from 'components/Trending/Trending';

export const Home = () => {
  const [trends, setTrends] = useState(null);
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const trending = await getMovies();
        setTrends([...trending.data.results]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h2>Trending this week</h2>
      <ul>
        <Trending trend={trends} />
      </ul>
    </>
  );
};
