import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addTopSeries } from "../utils/movieSlice";

const useTopTvSeries = () => {
  const dispatch = useDispatch();
  const getTopSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      OPTIONS,
    );
    const result = await data.json();
    dispatch(addTopSeries(result.results));
    console.log(result);
  };
  useEffect(() => {
    getTopSeries();
  }, []);
  return <div></div>;
};

export default useTopTvSeries;
