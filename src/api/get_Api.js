import axios from "axios";

const base_URL = "https://api.themoviedb.org/3";

const API_KEY = "?api_key=d74775b6acd29351279d6b68a7231f5c";

const { popularMovie } = {
  popularMovie: "/movie/popular",
};

export const get_MoviesPopular = async () => {
  const url = `${base_URL}${popularMovie}${API_KEY}`;

  const response = await axios.get(url);

  return await response.data.results;
};

// /movie/{movie_id}

export const get_MovieDatails = async (movie_id) => {
  const movieDatails = `/movie/${movie_id}`;
  const url = `${base_URL}${movieDatails}${API_KEY}`;

  const response = await axios.get(url);
  console.log(response.data.results);
  return await response.data.results;
};
