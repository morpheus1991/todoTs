import React from "react";
import styled from "styled-components";
import { FilterModeType, TodoListType } from "../structure/structure";
import Header from "../UI/organisms/Header";
import TodoList from "../UI/organisms/TodoList";

const FrameHeader = styled.div``;
const FrameArticle = styled.div`
  padding-bottom: 40px;
`;
const FrameFooter = styled.div``;

interface Template_TodoListProps {
  todoAddFc: () => void;
  inputOnChangeFc: React.Dispatch<React.SetStateAction<string>>;
  todos: TodoListType;
  todoDelete: Function;
  todoDoneToggle: Function;
  inputText: string;
  viewComplateTodo: Function;
  viewOnGoingTodo: Function;
  filterMode: string;
  viewallTodo: Function;
}

const Template_TodoList_Container = styled.div`
  width: 400px;
  margin: 0 auto;
  background: #fff;
  padding: 0px 40px;
  margin-top: 60px;
  &.viewAll {
    .filterButtonArea {
      .viewAll {
        button {
          background-color: #97f17c;
          border: transparent;
        }
      }
    }
    .todoItem {
      display: flex;
    }
  }
  &.viewOnGoing {
    .filterButtonArea {
      .viewOnGoing {
        button {
          background-color: #97f17c;
          border: transparent;
        }
      }
    }
    .todoItem {
      display: none;
      &.onGoing {
        display: flex;
      }
    }
  }
  &.viewComplate {
    .filterButtonArea {
      .viewComplate {
        button {
          background-color: #97f17c;
          border: transparent;
        }
      }
    }
    .todoItem {
      display: none;
      &.done {
        display: flex;
      }
    }
  }
`;
const Template_TodoList = ({
  todoAddFc,
  inputOnChangeFc,
  todos,
  todoDelete,
  todoDoneToggle,
  inputText,
  viewComplateTodo,
  viewOnGoingTodo,
  filterMode,
  viewallTodo,
}: Template_TodoListProps) => {
  return (
    <Template_TodoList_Container className={`filter ${filterMode}`}>
      <FrameHeader>
        <Header
          viewallTodo={viewallTodo}
          viewComplateTodo={viewComplateTodo}
          viewOnGoingTodo={viewOnGoingTodo}
          inputText={inputText}
          title="TodoList"
          buttonOnClick={todoAddFc}
          inputOnChange={inputOnChangeFc}
        ></Header>
      </FrameHeader>
      <FrameArticle>
        <TodoList
          todos={todos}
          todoDelete={todoDelete}
          todoDoneToggle={todoDoneToggle}
        ></TodoList>
      </FrameArticle>
      <FrameFooter></FrameFooter>
    </Template_TodoList_Container>
  );
};

export default Template_TodoList;
