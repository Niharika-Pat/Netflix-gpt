import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      OPTIONS,
    );
    const result = await data.json();
    dispatch(addTopRatedMovies(result.results));
    console.log(result);
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
  return <div></div>;
};

export default useTopRatedMovies;
