import { Movies } from './Navigation/Movies/Movies';
import { Navigation } from './Navigation/Navigation';
import { Trending } from './Trending/Trending';

export const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Trending />
      <Movies />
    </div>
  );
};
