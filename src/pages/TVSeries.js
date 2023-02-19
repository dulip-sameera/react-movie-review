import React from "react";
import Section from "../components/Section";
import { useFetch } from "../hook/useFetch";
import { posterBaseURL } from "../utils/Data";
import { extractTVData } from "../utils/extractTVData";
import {
  airingTodayTVSeriesURL,
  onTheAirTVSeriesURL,
  popularTVSeriesURL,
  topRatedTVSeriesURL,
} from "../utils/URL";

const TVSeries = () => {
  // Fetch Popular TV Series
  const popularTVSeries = useFetch(popularTVSeriesURL);
  const popularTVSeriesList = extractTVData(popularTVSeries, posterBaseURL);

  // Fetch Top Rated TV Series
  const topRatedTVSeries = useFetch(topRatedTVSeriesURL);
  const topRatedTVSeriesList = extractTVData(topRatedTVSeries, posterBaseURL);

  // Fetch Air On Today TV Series
  const airingTodayTVSeries = useFetch(airingTodayTVSeriesURL);
  const airingTodayTVSeriesList = extractTVData(
    airingTodayTVSeries,
    posterBaseURL
  );
  // Fetch On The Air TV Series
  const onTheAirTVSeries = useFetch(onTheAirTVSeriesURL);
  const onTheAirTVSeriesList = extractTVData(onTheAirTVSeries, posterBaseURL);

  return (
    <div className="container p-10 bg-lightGray min-h-screen">
      {onTheAirTVSeries.loading && <div>Loading...</div>}
      {onTheAirTVSeries.data && (
        <Section title={"ON THE AIR"} data={onTheAirTVSeriesList} />
      )}

      {airingTodayTVSeries.loading && <div>Loading...</div>}
      {airingTodayTVSeries.data && (
        <Section
          title={"AIRING TODAY(TIME ZONE: EST)"}
          data={airingTodayTVSeriesList}
        />
      )}

      {popularTVSeries.loading && <div>Loading...</div>}
      {popularTVSeries.data && (
        <Section title={"POPULAR"} data={popularTVSeriesList} />
      )}

      {topRatedTVSeries.loading && <div>Loading...</div>}
      {topRatedTVSeries.data && (
        <Section title={"TOP RATED"} data={topRatedTVSeriesList} />
      )}
    </div>
  );
};

export default TVSeries;
