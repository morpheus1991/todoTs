import React, { memo } from "react";
import styled from "styled-components";
import { Ir_pm } from "../../../styles/globalStyles";
import { Todo } from "../../structure/structure";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
interface TodoItemProps {
  todo: Todo;
  onChange: Function;
  onClick: Function;
  style: Object;
}
const TodoItemContainer = styled.li`
  padding: 10px 0;
  position: relative;
  display: flex;
  align-items: center;
  background: #f6fff3;
  width: 100%;
  &:hover {
    .hoverArea {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
    button {
      visibility: visible;
      opacity: 1;
    }
  }
  .inputItem.checkbox {
    input {
      display: none;
    }
    label {
      width: 40px;
      height: 40px;
      border: 1px solid #7cd367;
      ${Ir_pm};
    }
    input:checked + label {
      background: #97f17c;
    }
  }
  .textArea {
    padding: 0 20px;
  }
  .button {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 0;
    visibility: hidden;
    opacity: 0;
    transition: 1s;
  }
  .hoverArea {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: 40px;
    margin-right: 54px;
    visibility: hidden;
    opacity: 0;
    transition: 1s;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    color: #fff;
    padding: 0 20px;
    font-size: 10px;
    transform: translateY(-10px);
  }
`;
const TodoItem = ({ todo, onChange, onClick, style }: TodoItemProps) => {
  const { id, text, done, endTime, createTime } = todo;
  return (
    <div className={`todoItem ${done ? "done" : "onGoing"}`} style={style}>
      <TodoItemContainer className={`todoItem ${done ? "done" : "onGoing"}`}>
        <Input
          type="checkbox"
          id={String(id)}
          defaultChecked={done}
          onChange={(e: React.FormEventHandler) => {
            onChange(id);
          }}
          labelText="해야할일 체크"
          labelShow={true}
        ></Input>
        <p className="textArea">
          {id}
          {text}
        </p>

        <Button
          size="sm"
          text="삭제"
          onClick={() => {
            onClick(id);
          }}
        ></Button>
        <div className="hoverArea">
          <span>작성 : {createTime}</span>
          <span>완료 : {endTime}</span>
        </div>
      </TodoItemContainer>
    </div>
  );
};

export default memo(
  TodoItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo
);
// export default TodoItem;
