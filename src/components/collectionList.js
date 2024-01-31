import React from 'react';
import { useCollection } from '../hooks/useMovie';



function CollectionList({ id }) {
  const {isLoading, data} = useCollection(id)
  if (isLoading ) {
    return <p>Loading...</p>;
  }
  return ( 
    <ol>
      {data.parts.map((film) => (
        <li key={film.id}>
          <a href={`/films/${film.id}`}>
            {film.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default CollectionList;
