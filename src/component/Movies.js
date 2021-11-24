import React from 'react';
import MoviesCard from './MovieCard';
import './Movies.css';
import movies from '../movies.json';

function Movies(){
    const moviecards = []
    movies.forEach(movie=>{
        moviecards.push(<MoviesCard movie={movie} />)
    })

    return(
        <div className="container">
            <h1>Movies</h1>
            <div className='card-group'>
                {moviecards}
            </div>
        </div>
    )
}

export default Movies;