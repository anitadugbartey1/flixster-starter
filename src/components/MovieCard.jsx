import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ title, posterUrl, voteAverage }) => {
    return (
        <div className="movie-card">
            <img src={posterUrl} alt={`${title} poster`} className="movie-card__poster" />
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__vote-average">Rating: {voteAverage}</p>
        </div>
    );
};

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
};

export default MovieCard;
