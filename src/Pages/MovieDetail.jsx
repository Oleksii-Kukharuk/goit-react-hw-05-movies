import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetailsById } from 'services/Api';
import { useEffect } from 'react';
import { useState } from 'react';

export const MovieDetail = () => {
  const [filmData, setFilmData] = useState('');
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref =
    location.state?.from ?? '/goit-react-hw-05-movies/movies';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieDetail(id) {
      try {
        const movieById = await getMovieDetailsById(id);
        setFilmData(movieById.data);
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

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <article>
        <img
          src={'https://image.tmdb.org/t/p/w500/' + filmData.poster_path}
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
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <Outlet />
        </ul>
      </article>
    </div>
  );
};
