import styled from "styled-components";
import { Movie } from "../types";
import Image from "./Image";

const Container = styled.div`
  cursor: pointer;
  & > img {
    width: 100%;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    transition: transform 0.5s, box-shadow 0.5s;
  }
  &:hover img {
    transform: translateY(-10px);
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.5);
  }
`;
const Info = styled.div`
  padding: 20px 0;
`;
const Title = styled.h5`
  font-size: 1rem;
`;
const Details = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-top: 10px;
`;
const Language = styled.span`
  display: inline-block;
  text-transform: uppercase;
  padding: 2px 5px;
  background: var(--color-primary);
  color: white;
  border-radius: 5px;
  font-size: 0.9rem;
`;
const Rating = styled.span`
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 1.8em;
  font-size: 1rem;
  text-align: center;
  border-radius: 50%;
  font-weight: bold;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
`;
const VoteCount = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 5px;
`;

const MovieItem = ({ movie }: { movie: Movie }) => {
  return (
    <Container>
      <Image src={movie.poster_path} alt={movie.title} />
      <Info>
        <Title>{movie.title}</Title>
        <Details>
          <li>
            <Language>{movie.original_language}</Language>
          </li>
          <li>
            <Rating>{movie.vote_average}</Rating>
            <VoteCount>{movie.vote_count}</VoteCount>
          </li>
        </Details>
      </Info>
    </Container>
  );
};

export default MovieItem;
