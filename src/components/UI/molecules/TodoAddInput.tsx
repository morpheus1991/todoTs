import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const TodoAddInputContainer = styled.div`
  display: flex;
  width: 100%;
  .inputItem {
    display: inline-flex;
    flex-grow: 1;
    input {
      width: 100%;
      display: flex;
    }
  }
`;

interface TodoAddInputProps {
  inputOnChange: React.Dispatch<React.SetStateAction<string>>;
  buttonOnClick: () => void;
  inputText: string;
}

const TodoAddInput = ({
  inputText,
  inputOnChange,
  buttonOnClick,
}: TodoAddInputProps) => {
  return (
    <TodoAddInputContainer className="todoAddInput">
      <Input
        value={inputText}
        type="text"
        id="todoInput"
        onChange={inputOnChange}
        placeHoloder="할일을 입력해주세요."
        labelText="할일"
      ></Input>
      <Button size="md" text="할일추가" onClick={buttonOnClick}></Button>
    </TodoAddInputContainer>
  );
};

export default TodoAddInput;
