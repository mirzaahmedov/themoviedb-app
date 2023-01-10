import { useQuery } from "@tanstack/react-query";
import { popularMoviesQuery } from "../../api/movies";
import Grid from "../../common/components/Grid";
import MovieItem from "../../common/components/MovieItem";

const PopularMovies = () => {
  const { data, isLoading } = useQuery(["movie/popular"], popularMoviesQuery);

  return (
    <div>
      {data && Array.isArray(data?.results) ? (
        <Grid
          data={data.results}
          render={(movie) => <MovieItem key={movie.id} movie={movie} />}
        />
      ) : null}
    </div>
  );
};

export default PopularMovies;
