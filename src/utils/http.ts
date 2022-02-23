const headers = {
  "x-rapidapi-host": String(process.env.IMDB_API_HOST),
  "x-rapidapi-key": String(process.env.IMDB_API_KEY),
};

export const getBySearch = (title: string) => {
  const options = {
    method: "GET",
    params: { s: title, r: "json", page: "1" },
    headers,
  };
  return options;
};

export const getByTitle = (imdbId: string) => {
  const options = {
    method: "GET",
    params: { plot: "full", r: "json", i: imdbId },
    headers,
  };
  return options;
};
