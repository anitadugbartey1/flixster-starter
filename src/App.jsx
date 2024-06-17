import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard'; 
import MovieList from './components/MovieList';

const App = () => {
    return (
        <div className="app">
            {/* <h1>Movie Cards</h1> */}
            {/* <MovieCard 
                title=""
                posterUrl=""
                voteAverage={0}
            /> */}
            <h1>Now Playing Movies</h1>
            <MovieList />
        </div>
    );
};

export default App;
