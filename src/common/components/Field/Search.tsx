import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Label = styled.label`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.bg?.secondary};
  border-radius: 5px;
`;
const Icon = styled.span`
  vertical-align: middle;
  padding: 0.3rem 0.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text?.secondary};
  svg {
    display: block;
  }
`;
const Input = styled.input`
  appearance: none;
  border: none;
  outline: none;
  background: none;
  font-size: 1.5rem;
`;

const SearchField = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Label>
      <Icon>
        <AiOutlineSearch />
      </Icon>
      <Input {...props} />
    </Label>
  );
};

export default SearchField;
