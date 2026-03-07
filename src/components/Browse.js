import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
