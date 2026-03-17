import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { use } from "react";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopTvSeries from "../hooks/useTopTvSeries";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const gptMode = useSelector((store) => store.gpt?.gptModeOn);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTopTvSeries();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {gptMode === true ? (
        <GptSearch />
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
