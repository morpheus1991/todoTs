import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

interface TodoFilterProps {
  viewComplateTodo: Function;
  viewOnGoingTodo: Function;
  viewallTodo: Function;
}

const TodoFilterContainer = styled.div`
  margin-top: 20px;
  ul {
    display: flex;
    justify-content: center;
    li {
      width: 33.3333%;
      button {
        width: 100%;
        background: #fff;
        padding: 4px 10px;
        border: 1px solid #dbdbdb;
        border-radius: 20px;
      }
    }
  }
`;
const TodoFilter = ({
  viewComplateTodo,
  viewOnGoingTodo,
  viewallTodo,
}: TodoFilterProps) => {
  return (
    <TodoFilterContainer>
      <ul className="filterButtonArea">
        <li className="viewOnGoing">
          <Button text="진행중" size="sm" onClick={viewOnGoingTodo}></Button>
        </li>
        <li className="viewAll">
          <Button text="모두보기" size="sm" onClick={viewallTodo}></Button>
        </li>
        <li className="viewComplate">
          <Button text="완료" size="sm" onClick={viewComplateTodo}></Button>
        </li>
      </ul>
    </TodoFilterContainer>
  );
};

export default TodoFilter;
