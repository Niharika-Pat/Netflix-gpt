import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestion = () => {
  const gptStore = useSelector((state) => state.gpt);
  const { moviesName, movieResults } = gptStore;

  if (!moviesName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      {moviesName.map((movieName, index) => (
        <MovieList
          id={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMoviesSuggestion;
