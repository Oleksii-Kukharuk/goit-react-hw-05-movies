import useEffect from 'react';
import { getMovies } from 'services/Api';

export const Trending = () => {
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const trending = await getMovies();
        console.log(trending);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingMovies();
  }, []);
};
