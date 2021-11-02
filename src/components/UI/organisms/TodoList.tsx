import React, { useCallback, memo } from "react";
import styled from "styled-components";
import { TodoListType } from "../../structure/structure";
import TodoItem from "../molecules/TodoItem";
import { List } from "react-virtualized";
interface TodoListProps {
  todos: TodoListType;
  todoDelete: Function;
  todoDoneToggle: Function;
}

const TodoListContainer = styled.ul`
  .todoList {
    height: 400px;
    overflow-y: auto;
    .todoItem {
      background: #fff;
      button {
        background: #fff;
        border: 1px solid #dbdbdb;
        padding: 10px;
        border-radius: 16px;
      }
    }
  }
  /* padding: 20px 0; */
`;
const TodoList = ({ todos, todoDelete, todoDoneToggle }: TodoListProps) => {
  const rowRenderer = useCallback(
    ({ index, style }) => {
      const todo = todos[index];
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChange={todoDoneToggle}
          onClick={todoDelete}
          style={style}
        />
      );
    },
    [todos, todoDelete, todoDoneToggle]
  );
  return (
    <TodoListContainer>
      <List
        className="todoList"
        width={320}
        height={400}
        rowCount={todos.length}
        rowHeight={58}
        rowRenderer={rowRenderer}
        list={todos}
        style={{ outline: "none" }}
      ></List>
    </TodoListContainer>
  );
};

export default memo(TodoList);
