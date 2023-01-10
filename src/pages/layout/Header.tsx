import { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiTwotoneVideoCamera } from "react-icons/ai";
import Modal from "../../common/components/Modal";
import Image from "../../common/components/Image";
import SearchField from "../../common/components/Field/Search";
import { useSave } from "../../context/saved";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 20px;
`;
const Flex = styled.div<{
  gap?: string;
  align?: "center" | "top";
}>`
  display: flex;
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
`;
const Logo = styled.h1`
  font-size: 1.2rem;
`;
const LogoIcon = styled(AiTwotoneVideoCamera)`
  vertical-align: middle;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors?.primary};
`;
const Actions = styled.ul`
  list-style: none;
`;
const Action = styled.button``;

const Header = () => {
  const [isSavedVisible, setIsSavedVisible] = useState(false);

  const { saved } = useSave();

  return (
    <Container>
      <Flex gap="30px" align="center">
        <Logo>
          <LogoIcon />
          moviepedia
        </Logo>
        <SearchField />
      </Flex>
      <Actions>
        <li>
          <Action onClick={() => setIsSavedVisible((old) => !old)}>
            <AiOutlineHeart />
          </Action>
        </li>
      </Actions>
      <Modal>
        <ul style={{ padding: 20 }}>
          {saved.map((movie) => (
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 20,
                gap: 20,
              }}
            >
              <Image width={80} src={movie.poster} alt={movie.title} />
              <h6>{movie.title}</h6>
            </li>
          ))}
        </ul>
      </Modal>
    </Container>
  );
};

export default Header;
