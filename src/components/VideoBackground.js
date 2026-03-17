import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const store = useSelector((store) => store.movie?.trailerVideo);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video h-screen"
        src={
          "https://www.youtube.com/embed/" +
          store?.key +
          "?autoplay=1&mute=1&rel=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
