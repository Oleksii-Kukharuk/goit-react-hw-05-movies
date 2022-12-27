// import { useState } from 'react';

export const Trending = trend => {
  console.log(trend);
  return (
    <ul>
      {trend === null ??
        trend.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  );
};
