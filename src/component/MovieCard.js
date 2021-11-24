import React from "react";

function MoviesCard({movie}){
    return(
        <div className='moviecard'>
            <div><strong>{movie.movieName}</strong></div>
            <div className='rating'>{movie.rating} <span>/10</span></div>
            <div><strong>Release : </strong> {movie.releaseDate}</div>
        </div>
    )
}

export default MoviesCard;