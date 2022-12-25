import { useState, useEffect } from 'react';
import { getMovies } from 'services/Api';

export const Trending = () => {
  const [trends, setTrends] = useState([]);
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
    <ul>
      <h2>Trending this week</h2>
      {trends.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};
