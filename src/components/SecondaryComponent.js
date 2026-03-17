import { useSelector } from "react-redux";
import MovieList from "./MovieList.js";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-24 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        <MovieList title={"Top TV Series"} movies={movies?.topSeries} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
