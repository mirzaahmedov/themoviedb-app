import baseAPI from "./base";
import { Movie } from "../common/types";

type ID = Movie["id"];

export const popularMoviesQuery = async () => {
  const { data } = await baseAPI.get<{ results: Movie[] | null }>(
    "movie/popular"
  );
  return data;
};

export const topRatedMoviesQuery = async () => {
  const { data } = await baseAPI.get<{ results: Movie[] | null }>(
    "movie/top_rated"
  );
  return data;
};

export const movieByIDQuery = (id: ID) => async () => {
  const { data } = await baseAPI.get<Movie>(`/movie/${id}`);
  return data;
};
