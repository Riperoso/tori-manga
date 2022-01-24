import React, { useEffect, useState } from 'react';
import MangaCard from '../components/MangaCard';
import './Home.css';

function Home() {
  const [mangaState, setMangaState] = useState([{}]);
  const [isLoading, setLoading] = useState(true);

  useEffect(async () => {
    await fetch('https://api.jikan.moe/v3/top/manga/1/bypopularity')
      .then((res) => res.json())
      .then((res) => setMangaState(res.top));
    setLoading(false);
  }, []);

  return (
    <main>
      <header>
        <h1>Tori Mangás</h1>
        <div className="buttonHeader">
          <button htmlFor="favorites" type="button">Favorites</button>
          <button htmlFor="about us" type="button">About us</button>
        </div>
      </header>
      <h2 className="mangaContainer">Top Mangás</h2>
      <div className="mangaContainer">
        {
          isLoading ? <h1>Loading</h1>
            : mangaState && mangaState.map((manga, index) => (
              <MangaCard
                key={ index }
                url={ manga.image_url }
                id={ manga.mal_id }
                title={ manga.title }
                rank={ manga.rank }
                score={ manga.score }
                volumes={ manga.volumes }
              />
            ))
        }
      </div>
    </main>
  );
}

export default Home;
