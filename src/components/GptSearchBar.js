import React, { useRef } from "react";
import openai from "../utils/openai";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const gptQuery =
    "Act as a movie recommendation system and suggest some movies for the query: " +
    searchInput?.current?.value +
    " and give 5 movie name separated by commas";

  const searchMovieTmdb = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      OPTIONS,
    );
    const data = await response.json();
    console.log(data);
  };

  const handleSearch = async () => {
    const gptResults = await openai.responses.create({
      model: "gpt-3.5-turbo",
      instructions: "You are a coding assistant that talks like a pirate",
      input: "gptQuery",
    });

    if (!gptResults.choices) {
    }
    console.log(gptResults.choices?.[0]?.message?.content);

    const movies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = movies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovies({ moviesName: movies, movieResults: tmdbResults }));
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInput}
          type="text"
          placeholder="Thriller is fun..."
          className="col-span-9"
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
