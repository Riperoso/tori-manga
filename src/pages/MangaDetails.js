/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MangaDetails() {
  const [mangaState, setMangaState] = useState([{}]);
  const [isLoading, setLoading] = useState(true);
  const { mangaId } = useParams();

  useEffect(async () => {
    console.log(mangaId, 'details');
    await fetch(`https://api.jikan.moe/v3/manga/${mangaId}`)
      .then((res) => res.json())
      .then((res) => setMangaState([res]));
    setLoading(false);
  }, []);

  if (isLoading) return <h1>Loading</h1>;
  return (
    <div>
      { mangaState && mangaState.map((manga, index) => (
        <div key={ index }>
          <img src={ manga.image_url } alt="" className="img" />
          <h1>{ manga.title }</h1>
          <p>
            Rank:
            {' '}
            { manga.popularity }
          </p>
          <p>
            Avaliações:
            {' '}
            { manga.score }
          </p>
        </div>
      ))}
    </div>
  );
}

export default MangaDetails;
