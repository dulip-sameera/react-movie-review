import React from "react";
import Section from "../components/Section";
import { useFetch } from "../hook/useFetch";
import { posterBaseURL } from "../utils/Data";
import { extractMovieListData } from "../utils/extractMovieListData";
import {
  nowPlayingMoviesURL,
  popularMoviesURL,
  topRatedMoviesURL,
  upComingMoviesURL,
} from "../utils/URL";

const Movie = () => {
  //   Fetch popular movies
  const popularMovies = useFetch(popularMoviesURL);
  const popularMovieList = extractMovieListData(popularMovies, posterBaseURL);
  //   ---------------------------------

  //   Fetch Top Rated Movies
  const topRatedMovies = useFetch(topRatedMoviesURL);
  const topRatedMovieList = extractMovieListData(topRatedMovies, posterBaseURL);
  //   ---------------------------------

  //   Fetch Now Playing Movies
  const nowPlayingMovies = useFetch(nowPlayingMoviesURL);
  const nowPlayingMovieList = extractMovieListData(
    nowPlayingMovies,
    posterBaseURL
  );
  //   ---------------------------------

  //   Fetch Up Coming Movies
  const upComingMovies = useFetch(upComingMoviesURL);
  const upComingMovieList = extractMovieListData(upComingMovies, posterBaseURL);

  return (
    <div className="container p-10 bg-lightGray min-h-screen">
      {nowPlayingMovies.loading && <div>Loading...</div>}
      {nowPlayingMovies.data && (
        <Section title={"NOW PLAYING"} data={nowPlayingMovieList} />
      )}
      {upComingMovies.loading && <div>Loading...</div>}
      {upComingMovies.data && (
        <Section title={"UP COMING"} data={upComingMovieList} />
      )}
      {topRatedMovies.loading && <div>Loading...</div>}
      {topRatedMovies.data && (
        <Section title={"TOP RATED"} data={topRatedMovieList} />
      )}
      {popularMovies.loading && <div>Loading...</div>}
      {popularMovies.data && (
        <Section title={"POPULAR"} data={popularMovieList} />
      )}
    </div>
  );
};

export default Movie;
