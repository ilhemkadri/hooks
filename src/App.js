import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://via.placeholder.com/150",
      rating: 5,
    },
    {
      title: "The Dark Knight",
      description: "A thrilling superhero movie.",
      posterURL: "https://via.placeholder.com/150",
      rating: 4.5,
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= searchRating
  );


  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter
        onTitleChange={(title) => setSearchTitle(title)}
        onRatingChange={(rating) => setSearchRating(Number(rating))}
      />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          handleAddMovie({
            title: "New Movie",
            description: "Description of the new movie.",
            posterURL: "https://via.placeholder.com/150",
            rating: 4,
          })
        }
      >
        Add New Movie
      </button>
    </div>
  );
}

export default App;

