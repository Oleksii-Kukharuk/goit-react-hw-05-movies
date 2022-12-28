import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/Api';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchActors(id) {
      try {
        const getActors = await getMovieCredits(id);
        setActors(getActors.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchActors(movieId);
  }, [movieId]);

  console.log(actors);

  return (
    <>
      {actors.length > 1 &&
        actors.map(({ name, profile_path }) => {
          return (
            <div key={name}>
              <img
                src={'https://image.tmdb.org/t/p/w500/' + profile_path}
                alt={name}
                width="100"
              />
              <h3>{name}</h3>
            </div>
          );
        })}
    </>
  );
};
