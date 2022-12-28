import { Movies } from '../Pages/Movies';
import { Home } from '../Pages/Home';
import { Trending } from './Trending/Trending';
import { MovieDetail } from '../Pages/MovieDetail';
import { Route, Routes, Link } from 'react-router-dom';
import { NotFound } from '../Pages/NotFound';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Navigation </Link>
          <Link to="/movies"> Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="trend" element={<Trending />} />
        </Route>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
