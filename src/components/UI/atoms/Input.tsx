import React from "react";
import styled from "styled-components";
import { InputType } from "../../structure/structure";
interface InputProps {
  type: InputType;
  onChange?: Function;
  value?: string;
  placeHoloder?: string;
  ref?: any;
  id: string;
  labelText?: string;
  labelShow?: boolean;
  defaultChecked?: boolean;
}

const radioAndCheckboxType = ["radio", "checkbox"];

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  label {
    order: 1;
  }
  input {
    order: 2;
    &:focus {
      border: 1px solid #97f17c;
    }
  }
`;
const Input = ({
  type,
  onChange,
  placeHoloder,
  ref,
  id,
  labelShow,
  labelText,
  defaultChecked,
  ...rest
}: InputProps) => {
  if (radioAndCheckboxType.includes(type)) {
    return (
      <InputContainer className={`inputItem ${type}`}>
        <input
          id={id}
          type={type}
          name={id}
          checked={defaultChecked}
          onChange={() => {
            if (onChange) {
              onChange(id);
            }
          }}
        />
        <label htmlFor={id} className={labelShow ? "show" : "hide"}>
          {labelText}
        </label>
      </InputContainer>
    );
  } else {
    return (
      <InputContainer className="inputItem">
        <input
          type={type}
          placeholder={placeHoloder}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
          }}
          {...rest}
        />
      </InputContainer>
    );
  }
};

export default Input;
