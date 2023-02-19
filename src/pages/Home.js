import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "../components/Section";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVSeries, setPopularTVSeries] = useState([]);

  const popularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

  const popularTVSeriesURL = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // image url for poster
    const imageBaseURL = "http://image.tmdb.org/t/p/";
    const posterSize = "w500";
    const posterBaseURL = `${imageBaseURL}${posterSize}`;

    // fetch popular movies
    const movieResult = await axios.get(popularMoviesURL);
    // stop working if request didn't send the data
    if (movieResult.status !== 200) return;
    const movieList = movieResult.data.results;
    const requiredMovieDataList = movieList.map((item) => ({
      id: item.id,
      poster: `${posterBaseURL}${item.poster_path}`,
      title: item.title,
      vote: item.vote_average,
    }));
    setPopularMovies(requiredMovieDataList);

    // fetch popular tv series
    const tvResult = await axios.get(popularTVSeriesURL);
    // stop working if request didn't send the data
    if (tvResult.status !== 200) return;
    const tvList = tvResult.data.results;
    const requiredTvDataList = tvList.map((item) => ({
      id: item.id,
      poster: `${posterBaseURL}${item.poster_path}`,
      title: item.name,
      vote: item.vote_average,
    }));
    setPopularTVSeries(requiredTvDataList);
  };

  return (
    <>
      <div className="container p-10 bg-lightGray min-h-screen">
        <Section title={"POPULAR MOVIES"} data={popularMovies} />
        <Section title={"POPULAR TV SERIES"} data={popularTVSeries} />
      </div>
    </>
  );
};

export default Home;
