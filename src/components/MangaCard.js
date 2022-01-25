/* eslint-disable react/prop-types */
import React from 'react';
import './MangaCard.css';

function MangaCard({ id, url, title, rank, score, volumes }) {
  return (
    <div key={ id } className="mangaCard">
      <img src={ url } alt="" className="img" />
      <div className="mangaInfo">
        <h3>
          {
            title
          }
        </h3>
        <p>{ `Rank: ${rank}` }</p>
        <p>{ `Score: ${score}` }</p>
        { volumes === null ? '' : <p>{ `Volumes: ${volumes}` }</p>}
      </div>
    </div>
  );
}

export default MangaCard;
