import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: white;
  min-width: 600px;
  min-height: 600px;
  z-index: 100;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
`;

const Modal = ({ children }: { children: ReactNode }) => {
  return createPortal(
    <Container>{children}</Container>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
