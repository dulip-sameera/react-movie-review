import Section from "../components/Section";
import { useFetch } from "../hook/useFetch";
import { posterBaseURL } from "../utils/Data";
import { extractMovieData } from "../utils/extractMovieData";
import { extractTVData } from "../utils/extractTVData";
import { popularMoviesURL, popularTVSeriesURL } from "../utils/URL";

const Home = () => {
  //   Fetch popular movies
  const popularMovies = useFetch(popularMoviesURL);
  const popularMovieList = extractMovieData(popularMovies, posterBaseURL);

  // Fetch Popular TV Series
  const popularTVSeries = useFetch(popularTVSeriesURL);
  const popularTVSeriesList = extractTVData(popularTVSeries, posterBaseURL);

  return (
    <div className="container p-10 bg-lightGray min-h-screen">
      {popularMovies.loading && <div>Loading...</div>}
      {popularMovies.data && (
        <Section title={"POPULAR MOVIES"} data={popularMovieList} />
      )}

      {popularTVSeries.loading && <div>Loading...</div>}
      {popularTVSeries.data && (
        <Section title={"POPULAR TV SERIES"} data={popularTVSeriesList} />
      )}
    </div>
  );
};

export default Home;
