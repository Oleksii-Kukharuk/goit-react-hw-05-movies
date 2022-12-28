import { Movies } from '../Pages/Movies';
import { Home } from '../Pages/Home';
import { Trending } from './Trending/Trending';
import { MovieDetail } from '../Pages/MovieDetail';
import { Route, Routes, Link } from 'react-router-dom';
import { NotFound } from '../Pages/NotFound';

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
        <Route path="movies/:movieId" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
