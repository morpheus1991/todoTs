export type InputType = "text" | "password" | "number" | "checkbox" | "radio";
export type ButtonSize = "sm" | "md" | "lg" | "full";
export type Todo = {
  text: string;
  done: boolean;
  id: number;
  createTime: string;
  endTime?: string | null;
};
export type TodoListType = Todo[];

export type FilterModeType = "viewOnGoing" | "viewComplate" | "";
