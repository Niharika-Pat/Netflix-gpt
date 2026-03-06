import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainComponent = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log("main movie", mainMovie);
  const { id, original_title, overview } = mainMovie;
  console.log("main movie id", id);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainComponent;
