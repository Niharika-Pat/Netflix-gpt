import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainComponent = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { id, original_title, overview } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainComponent;
