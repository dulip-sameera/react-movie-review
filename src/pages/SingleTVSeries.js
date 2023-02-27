import React from "react";
import { useParams } from "react-router-dom";
import Description from "../components/Description";
import NoTrailer from "../components/NoTrailer";
import Player from "../components/Player";
import Review from "../components/Review";
import Title from "../components/Title";
import { useFetch } from "../hook/useFetch";
import { posterBase342URL, youtubeBaseURL } from "../utils/Data";
import extractTVData from "../utils/extractTVData";

const SingleTVSeries = () => {
  const { sid } = useParams();

  const url = `https://api.themoviedb.org/3/tv/${sid}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&append_to_response=videos`;

  const tvSeries = useFetch(url);

  let data = extractTVData(tvSeries, posterBase342URL, youtubeBaseURL);

  return (
    <div className="container p-10 bg-lightGray min-h-screen">
      {tvSeries.loading && <div>Loading...</div>}
      {tvSeries.data && <Title name={data.title} />}
      {tvSeries.data && data.trailer ? (
        <Player url={data.trailer} />
      ) : (
        <NoTrailer />
      )}
      {tvSeries.data && (
        <Description
          poster={data.poster}
          overview={data.overview}
          vote={data.vote}
          type={data.type}
        />
      )}

      <Review movieId={sid} type={"tv"} />
    </div>
  );
};

export default SingleTVSeries;
