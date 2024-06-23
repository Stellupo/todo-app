import { createReducer, on } from "@ngrx/store";
import { Todo } from "./todo.model";
import * as TodoActions from "./actions";
export const todoFeatureKey = "todo";

export interface TodoState {
  todos: Todo[];
  loading: boolean;
}
export const initialState: TodoState = {
  todos: [],
  loading: false,
};

export const todoReducer = createReducer(
  initialState,

  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    loading: true,
  })),

  on(TodoActions.addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),

  on(TodoActions.updateTodo, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((t: Todo) => (t.id === todo.id ? todo : t)),
  })),

  on(TodoActions.deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((t: Todo) => t.id !== id),
  }))
);