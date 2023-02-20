export function extractTVListData(response, posterBaseURL) {
  if (response.error) console.log(response.error);

  let dataList = [];

  if (response.data) dataList = response.data.results;

  const data = dataList.map((item) => ({
    id: item.id,
    poster: `${posterBaseURL}${item.poster_path}`,
    title: item.name,
    vote: item.vote_average,
    type: "tvseries",
  }));

  return data;
}
