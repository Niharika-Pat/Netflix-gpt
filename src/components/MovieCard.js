import { MOVIE_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log("posterPath------------------->", posterPath);
  return (
    <div className="w-28 pr-4">
      <img alt="movie card" src={MOVIE_IMAGE_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
