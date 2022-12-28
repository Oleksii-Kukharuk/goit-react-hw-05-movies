// import { useState } from 'react';

import { Link } from 'react-router-dom';

export const Trending = ({ trends }) => {
  console.log(trends);
  return (
    <ul>
      {trends.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
