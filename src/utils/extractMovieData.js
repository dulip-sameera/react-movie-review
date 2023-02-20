export default function extractMovieData(
  response,
  posterBaseURL,
  youtubeBaseURL
) {
  if (response.error) console.log(response.error);
  let data = {
    id: "",
    overview: "",
    poster: "",
    title: "",
    vote: "",
    trailer: "",
  };

  if (
    response.data &&
    ("results" in response.data.videos) &
      (response.data.videos.results !== undefined)
  ) {
    for (const item of response.data.videos.results) {
      if (item.type === "Trailer") {
        data = {
          id: response.data.id,
          overview: response.data.overview,
          poster: `${posterBaseURL}${response.data.poster_path}`,
          title: response.data.title,
          vote: response.data.vote_average,
          trailer: `${youtubeBaseURL}${item.key}`,
        };
        break;
      }
    }
  }

  //   console.log(data);
  return data;
}
