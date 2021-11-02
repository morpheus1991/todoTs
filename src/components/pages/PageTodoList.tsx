import { type } from "os";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FilterModeType, TodoListType } from "../structure/structure";
import Template_TodoList from "../templates/Template_TodoList";

export const getMonthString = (num: number) => {
  let res;
  const month = [
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  res = month[num - 1];
  return res;
};
export const getDayString = (num: number) => {
  let res;
  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (res = day[num - 1]);
};

const createBulkTodos = (limit: number) => {
  const array: TodoListType = [];
  for (let i = 0; i < limit; i++) {
    array.push({
      id: i,
      text: `할일${i}`,
      done: false,
      createTime: new Date().toLocaleTimeString(),
    });
  }
  return array;
};
const getItem = (item: string) => {
  return JSON.parse(window.localStorage.getItem(item)!);
};
const setItem = (key: string, item: any) => {
  window.localStorage.setItem(key, JSON.stringify(item));
};

const getIdNumber = () => {
  const item: number = getItem("idNumber")!;
  console.log(item);
  if (item) {
    console.log(item);
    return item;
  }
  return 2501;
};
const PageTodoList = () => {
  // const todosInit: TodoListType = [];
  const todosInit: TodoListType = createBulkTodos(2500)!;
  let idNumber = useRef(getIdNumber());
  const [inputText, setInputText] = useState("");
  const [filterMode, setFilterMode] = useState("viewOnGoing");
  const [todos, setTodos] = useState(() => {
    const items: TodoListType = getItem("todos");
    if (items) {
      return items;
    }
    return todosInit;
  });

  useEffect(() => {
    setItem("idNumber", idNumber.current);
    setItem("todos", todos);
  }, [todos, idNumber]);

  const addTodo = useCallback(() => {
    console.log(todos);
    const createTime = new Date().toLocaleTimeString();
    if (inputText.length > 0) {
      const todo = {
        id: (idNumber.current += 1),
        text: inputText,
        done: false,
        createTime: createTime,
      };
      setTodos(todos.concat(todo));
      setInputText("");
    }
  }, [inputText]);

  const deleteTodo = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const todoDoneCheck = useCallback(
    (id: number) => {
      console.log(new Date().getDay());
      console.log(typeof id);
      const endTime = new Date().toLocaleTimeString();
      const nextTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          if (todo.done) {
            todo.endTime = null;
          } else {
            todo.endTime = endTime;
          }
          todo.done = !todo.done;
        }
        return { ...todo };
      });
      console.log(nextTodos);
      setTodos(nextTodos);
    },
    [todos]
  );

  const viewComplateTodo = () => {
    setFilterMode("viewComplate");
  };
  const viewOnGoingTodo = () => {
    setFilterMode("viewOnGoing");
  };
  const viewallTodo = () => {
    setFilterMode("viewAll");
  };
  return (
    <div>
      <Template_TodoList
        viewallTodo={viewallTodo}
        filterMode={filterMode}
        viewComplateTodo={viewComplateTodo}
        viewOnGoingTodo={viewOnGoingTodo}
        inputText={inputText}
        todos={todos}
        todoDelete={deleteTodo}
        todoDoneToggle={todoDoneCheck}
        todoAddFc={addTodo}
        inputOnChangeFc={setInputText}
      ></Template_TodoList>
    </div>
  );
};

export default PageTodoList;
