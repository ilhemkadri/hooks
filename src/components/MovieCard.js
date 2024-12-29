import React from "react";

const MovieCard =({movie}) => {
    return(
        <div className="movie-card">
            <img src={movie.posterURL} alt={`${movie.title} Poster`} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
        <span>Rating: {movie.rating}</span>
    </div>
);
};

export default MovieCard;