const VideoTitle = ({ title, overview }) => {
  const watchMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/{movie_id}/watch/providers?api_key={YOUR_API_KEY}",
    );
  };
  return (
    <div className="w-screen aspect-video pt-[9%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-5">
        <button
          className="bg-white text-black p-2 px-10 text-lg  rounded-lg hover:bg-opacity-80"
          onClick="watchMovie()"
        >
          ▶️ Play
        </button>
        <button className="bg-gray-400 text-white p-2 px-10 text-lg bg-opacity-50 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
