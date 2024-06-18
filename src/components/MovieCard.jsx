import React, { useState } from "react";
import "./MovieCard.css";

const MovieCard = ({ title, posterPath, voteAverage, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatched, setIsWatched] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent triggering onClick of the card
    setIsFavorite(!isFavorite);
  };

  const handleWatchedChange = (e) => {
    e.stopPropagation(); // Prevent triggering onClick of the card
    setIsWatched(!isWatched);
  };

  return (
    <div className="card" onClick={onClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
      />
      <h2>{title}</h2>
      <p>Rating: {voteAverage}</p>
      <button id="favorite-button" onClick={handleFavoriteClick}>
        {isFavorite ? "💖" : "Favorite♡"}
      </button>
      <button id="watched-button">
        Watched
        <input
          type="checkbox"
          checked={isWatched}
          onChange={handleWatchedChange}
        />
      </button>
    </div>
  );
};

export default MovieCard;

