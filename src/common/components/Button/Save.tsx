import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Label = styled.label`
  color: ${({ theme }) => theme.colors?.primary};
  cursor: pointer;
  user-select: none;
`;
const Input = styled.input`
  display: none;
`;

const SaveButton = ({
  checked,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Label>
      <Input type="checkbox" name="save" checked={checked} {...props} />
      {checked ? <AiFillHeart size="2em" /> : <AiOutlineHeart size="2em" />}
    </Label>
  );
};

export default SaveButton;
