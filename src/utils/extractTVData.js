export default function extractTVData(response, posterBaseURL, youtubeBaseURL) {
  if (response.error) console.log(response.error);

  let data = {
    id: "",
    overview: "",
    poster: "",
    title: "",
    vote: "",
    trailer: "",
    type: "",
  };

  if (response.data) {
    data = {
      id: response.data.id,
      overview: response.data.overview,
      poster: `${posterBaseURL}${response.data.poster_path}`,
      title: response.data.name,
      vote: response.data.vote_average,
      type: "tv series",
    };
  }

  if (
    response.data &&
    ("results" in response.data.videos) &
      (response.data.videos.results !== undefined)
  ) {
    for (const item of response.data.videos.results) {
      if (item.type === "Trailer") {
        data.trailer = `${youtubeBaseURL}${item.key}`;
        break;
      }
    }
  }

  if (
    response.data &&
    (response.data.videos.results !== undefined) &
      (response.data.videos.results.length === 0)
  ) {
    data.trailer = null;
  }

  //   console.log(data);
  return data;
}
