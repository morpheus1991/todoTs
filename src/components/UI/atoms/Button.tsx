import React from "react";
import styled from "styled-components";
import { ButtonSize } from "../../structure/structure";

const ButtonAndStyle = styled.button``;
interface ButtonProps {
  size: ButtonSize;
  icon?: string;
  colorSet?: string;
  chlidren?: any;
  text: string;
  onClick?: any;
}
const Button = ({ size, text, onClick }: ButtonProps) => {
  return (
    <ButtonAndStyle
      className={`button ${size}`}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </ButtonAndStyle>
  );
};

export default Button;
