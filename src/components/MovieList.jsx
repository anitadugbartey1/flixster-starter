import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = import.meta.env.VITE_API_KEY; // Ensure this matches your environment variable configuration

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovies(data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, [API_KEY]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    voteAverage={movie.vote_average}
                />
            ))}
        </div>
    );
};

export default MovieList;
