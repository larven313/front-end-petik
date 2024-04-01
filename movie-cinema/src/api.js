import axios from "axios";

const apiKey = "8e465ff28280979967a70c1462d19f7f";
const baseUrl = "https://api.themoviedb.org/3";

export const getMovieList = async () => {
  const movie = await axios.get(
    // hit api dengan endpoint https://api.themoviedb.org/3/movie/popular?page=1&api_key=8e465ff28280979967a70c1462d19f7f
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  );
  return search.data;
};
