import baseAPI from "./base";
import { Movie } from "../common/types";

export const popularMoviesQuery = async () => {
  const { data } = await baseAPI.get<{ results: Movie[] | null }>(
    "movie/popular"
  );
  return data;
};