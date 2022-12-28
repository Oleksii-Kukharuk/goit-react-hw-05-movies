import { useParams } from 'react-router-dom';
import { getMovieDetailsById } from 'services/Api';
import { useEffect } from 'react';
import { useState } from 'react';

export const MovieDetail = () => {
  const [filmData, setFilmData] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieDetail(id) {
      try {
        const movieById = await getMovieDetailsById(id);
        setFilmData(movieById.data);
        console.log(id);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetail(movieId);
  }, [movieId]);

  function genres() {
    if (filmData) {
      filmData.genres.map(({ name }) => name).join(', ');
    }
    return ' the code with genres broken ';
  }

  const getGenres = genres();

  console.log(filmData);
  return (
    <div>
      <button type="button"> Go back</button>
      <article>
        <img
          src={'https://image.tmdb.org/t/p/w500' + filmData.poster_path}
          alt={filmData.original_title}
        />
        <ul>
          <li>
            <h2>{filmData.original_title}</h2> <p>{filmData.popularity}</p>
          </li>
          <li>
            <h3>Overviews</h3>
            <p>{filmData.overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>{getGenres}</p>
          </li>
        </ul>
        <p>Additional info</p>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </article>
    </div>
  );
};
