import React from "react";
import Section from "../components/Section";
import { useFetch } from "../hook/useFetch";
import { posterBaseURL } from "../utils/Data";
import { extractTVListData } from "../utils/extractTVListData";
import {
  airingTodayTVSeriesURL,
  onTheAirTVSeriesURL,
  popularTVSeriesURL,
  topRatedTVSeriesURL,
} from "../utils/URL";

const TVSeries = () => {
  // Fetch Popular TV Series
  const popularTVSeries = useFetch(popularTVSeriesURL);
  const popularTVSeriesList = extractTVListData(popularTVSeries, posterBaseURL);

  // Fetch Top Rated TV Series
  const topRatedTVSeries = useFetch(topRatedTVSeriesURL);
  const topRatedTVSeriesList = extractTVListData(
    topRatedTVSeries,
    posterBaseURL
  );

  // Fetch Air On Today TV Series
  const airingTodayTVSeries = useFetch(airingTodayTVSeriesURL);
  const airingTodayTVSeriesList = extractTVListData(
    airingTodayTVSeries,
    posterBaseURL
  );
  // Fetch On The Air TV Series
  const onTheAirTVSeries = useFetch(onTheAirTVSeriesURL);
  const onTheAirTVSeriesList = extractTVListData(
    onTheAirTVSeries,
    posterBaseURL
  );

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
