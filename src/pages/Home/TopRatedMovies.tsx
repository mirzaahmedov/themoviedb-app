import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { topRatedMoviesQuery } from "../../api/movies";
import { useSave } from "../../context/saved";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import MovieItem from "../../common/components/MovieItem";
// import Grid from "../../common/components/Grid";

import "swiper/css";

const Section = styled.section`
  padding: 20px;
`;
const Headline = styled.h3`
  margin-bottom: 20px;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

const TopRatedMovies = () => {
  const { data, isLoading } = useQuery(["movie/top"], topRatedMoviesQuery);
  const { saved, save, unsave } = useSave();

  return (
    <div>
      {/* {data && Array.isArray(data?.results) ? (
        <Grid
          data={data.results}
          render={(movie) => (
            <MovieItem
              saved={saved}
              save={save}
              unsave={unsave}
              key={movie.id}
              movie={movie}
            />
          )}
        />
      ) : null} */}
      {data && Array.isArray(data?.results) ? (
        <Section>
          <Headline>Top Rated Movies</Headline>
          <Swiper
            spaceBetween={20}
            slidesPerView={7}
            pagination={true}
            modules={[Pagination]}
          >
            {data.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieItem
                  saved={saved}
                  save={save}
                  unsave={unsave}
                  movie={movie}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      ) : null}
    </div>
  );
};

export default TopRatedMovies;
