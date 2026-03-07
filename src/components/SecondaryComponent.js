import { useSelector } from "react-redux";
import MovieList from "./MovieList.js";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-24 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Asian"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Hollywood"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Bollywood"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
