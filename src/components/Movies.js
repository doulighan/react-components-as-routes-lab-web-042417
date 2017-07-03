import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map( m => (
        <div>
          <h4>{m.title}</h4>
          <h4>{m.time}</h4>
          <ul>
            {m.genres.map( g => (
              <li>{g}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Movies;
