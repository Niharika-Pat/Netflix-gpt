import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      OPTIONS,
    );
    const result = await data.json();
    dispatch(addUpcomingMovies(result.results));
    console.log(result);
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
  return <div></div>;
};

export default useUpcomingMovies;
