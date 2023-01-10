import { ChangeEvent } from "react";
import styled from "styled-components";
import moment from "moment";
import { Movie } from "../types";
import SaveButton from "./Button/Save";
import Image from "./Image";
import { TRecord } from "../../context/saved";

const Container = styled.div`
  padding-top: 20px;
  position: relative;
  cursor: pointer;
  & > img {
    width: 100%;
    box-shadow: 0px 10px 20px rgba(38, 50, 56, 0.35);
    transition: transform 0.25s, box-shadow 0.25s;
  }
  &:hover img {
    transform: translateY(-10px);
    box-shadow: 0 20px 20px rgba(38, 50, 56, 0.35);
  }
`;
const Poster = styled(Image)`
  border-radius: 10px;
`;
const Info = styled.div`
  padding: 10px 0;
`;
const Title = styled.h5`
  margin-top: 10px;
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.text?.primary};
`;
const Details = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const Lang = styled.span`
  display: inline-block;
  text-transform: uppercase;
  padding: 2px 5px;
  background: ${({ theme }) => theme.colors?.primary};
  color: white;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
`;
const Score = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 2px 5px;
  font-size: 1.3rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors?.primary};
  color: white;
  border-radius: 5px;
`;
const ReleaseDate = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text?.secondary};
`;

type Props = {
  movie: Movie;
  saved: TRecord[];
  save: (item: TRecord) => void;
  unsave: (item: Omit<TRecord, "title" | "poster">) => void;
};

const MovieItem = ({ movie, saved, save, unsave }: Props) => {
  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      save({
        type: "movie",
        id: movie.id,
        title: movie.original_title,
        poster: movie.poster_path,
      });
    } else {
      unsave({ type: "movie", id: movie.id });
    }
  };

  return (
    <Container>
      <Poster src={movie.poster_path} alt={movie.title} />
      <Info>
        <Score>{movie.vote_average}</Score>
        <Details>
          <li>
            <Lang>{movie.original_language}</Lang>
          </li>
          <li>
            <SaveButton
              checked={saved.some(
                (v) => v.type === "movie" && v.id === movie.id
              )}
              onChange={handleToggle}
            />
          </li>
        </Details>
        <Title>{movie.title}</Title>
        <ReleaseDate>
          {moment(movie.release_date).format("MMMM Do YYYY")}
        </ReleaseDate>
      </Info>
    </Container>
  );
};

export default MovieItem;
