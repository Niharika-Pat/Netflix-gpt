import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { MOVIE_TRAILER_PART1, MOVIE_TRAILER_PART2 } from "../utils/constants";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTrailerVideo = async () => {
      const data = await fetch(
        `${MOVIE_TRAILER_PART1}${id}${MOVIE_TRAILER_PART2}`,
        OPTIONS,
      );
      const result = await data.json();

      const finalResults = result?.results?.filter(
        (item) => item.type === "Trailer",
      );
      const trailer = finalResults.length ? finalResults[0] : result.result[0];
      dispatch(addTrailerVideo(trailer));
    };

    getTrailerVideo();
  }, [id, dispatch]);
};

export default useMovieTrailer;
