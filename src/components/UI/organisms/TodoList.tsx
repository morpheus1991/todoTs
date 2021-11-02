import React from "react";
import styled from "styled-components";
import { TodoListType } from "../../structure/structure";
import TodoItem from "../molecules/TodoItem";
interface TodoListProps {
  todos: TodoListType;
  todoDelete: Function;
  todoDoneToggle: Function;
}

const TodoListContainer = styled.ul`
  padding: 20px 0;
  height: 400px;
  overflow-y: auto;
  .todoItem {
    background: #efffe0;
    button {
      background: #fff;
      border: 1px solid #dbdbdb;
      padding: 10px;
      border-radius: 16px;
    }
    & + .todoItem {
      margin-top: 20px;
    }
  }
`;
const TodoList = ({ todos, todoDelete, todoDoneToggle }: TodoListProps) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChange={todoDoneToggle}
          onClick={todoDelete}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
