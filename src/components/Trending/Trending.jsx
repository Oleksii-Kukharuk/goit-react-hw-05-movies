// import { useState } from 'react';

import { Link } from 'react-router-dom';

export const Trending = ({ trends }) => {
  return (
    <ul>
      <h2>Trending this week</h2>
      {trends.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
