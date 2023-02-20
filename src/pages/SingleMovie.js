import React from "react";
import { useParams } from "react-router-dom";
import Description from "../components/Description";
import NoTrailer from "../components/NoTrailer";
import Player from "../components/Player";
import Title from "../components/Title";
import { useFetch } from "../hook/useFetch";
import { posterBase342URL, youtubeBaseURL } from "../utils/Data";
import extractMovieData from "../utils/extractMovieData";

const SingleMovie = () => {
  const { sid } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${sid}?language=en-US&api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`;

  const movie = useFetch(url);

  let data = extractMovieData(movie, posterBase342URL, youtubeBaseURL);

  return (
    <div className="container p-10 bg-lightGray min-h-screen">
      {movie.loading && <div>Loading...</div>}
      {movie.data && <Title name={data.title} />}
      {movie.data && data.trailer ? (
        <Player url={data.trailer} />
      ) : (
        <NoTrailer />
      )}
      {movie.data && (
        <Description
          poster={data.poster}
          overview={data.overview}
          vote={data.vote}
          type={data.type}
        />
      )}
    </div>
  );
};

export default SingleMovie;
