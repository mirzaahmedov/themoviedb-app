import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  padding: 20px;
`;

type Props<T> = {
  data: T[];
  render: (data: T) => ReactNode;
};

const Grid = <T extends unknown>({ data, render }: Props<T>) => {
  return <Container>{Array.isArray(data) ? data.map(render) : null}</Container>;
};

export default Grid;
