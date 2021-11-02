import React, { useCallback } from "react";
import styled from "styled-components";
import { Ir_pm } from "../../../styles/globalStyles";
import { getDayString } from "../../pages/PageTodoList";
import { FilterModeType } from "../../structure/structure";
import TodoAddInput from "../molecules/TodoAddInput";
import TodoFilter from "../molecules/TodoFilter";

const HeaderContainer = styled.header`
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .inputItem {
    margin-right: 20px;
    input {
      height: 40px;
      border: 1px solid #bdbdbd;
      background: #fff;
      color: #414141;
      border-radius: 16px;
      padding: 0 20px;
    }
  }
  .todoAddInput {
    margin-top: 10px;
    button {
      background: #fff;
      border: 1px solid #dadada;
      color: #fff;
      padding: 10px;
      height: 40px;
      display: flex;
      position: relative;
      ${Ir_pm}
      width: 40px;
      height: 40px;
      border-radius: 50%;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 6px;
        height: 24px;
        border-radius: 10px;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        background: #97f17c;
        transition: 0.5s;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 6px;
        height: 24px;
        border-radius: 10px;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        background: #97f17c;
        transform: rotate(90deg);
        transition: 0.5s;
      }
      &:hover {
        background: #fafafa;
        &::after {
          transform: rotate(360deg);
        }
        &::before {
          transform: rotate(270deg);
        }
      }
    }
  }

  .todayArea {
    padding-left: 40px;
    position: relative;
    margin-top: 40px;

    .year {
      padding-top: 20px;
      padding-left: 6px;
      padding-bottom: 4px;
      font-size: 12px;
    }
    .month {
      position: absolute;
      left: 46px;
      top: 8px;
      font-size: 12px;
    }
    .date {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-weight: bold;
      width: 40px;
    }
    .day {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      align-items: center;
      right: 0;
    }
  }
`;
interface HeaderProps {
  inputOnChange: React.Dispatch<React.SetStateAction<string>>;
  buttonOnClick: () => void;
  title: string;
  inputText: string;
  viewComplateTodo: Function;
  viewOnGoingTodo: Function;
  viewallTodo: Function;
}
const Header = ({
  inputText,
  title,
  inputOnChange,
  buttonOnClick,
  viewComplateTodo,
  viewOnGoingTodo,
  viewallTodo,
}: HeaderProps) => {
  const today = new Date();
  console.log(today.getMonth());
  const day = today.getDay();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return (
    <HeaderContainer>
      <h1 className="srOnly">{title}</h1>
      <div className="todayArea">
        <div className="year">
          <span className="srOnly">year</span>
          <span>{year}</span>
        </div>
        <div className="month">
          <span className="srOnly">month</span>
          <span>{month}</span>
        </div>
        <div className="date">
          <span className="srOnly">date</span>
          <span>{date}</span>
        </div>
        <div className="day">{getDayString(day)}</div>
      </div>
      <TodoAddInput
        inputText={inputText}
        inputOnChange={inputOnChange}
        buttonOnClick={buttonOnClick}
      ></TodoAddInput>
      <TodoFilter
        viewallTodo={viewallTodo}
        viewComplateTodo={viewComplateTodo}
        viewOnGoingTodo={viewOnGoingTodo}
      ></TodoFilter>
    </HeaderContainer>
  );
};
export default Header;
