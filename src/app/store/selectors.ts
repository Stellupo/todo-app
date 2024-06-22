import {  createSelector } from "@ngrx/store"
import { TodoState } from "./reducers";
import { AppState } from "./store";
 

const feature = (state: AppState) => state.todo;

export const todoSelector = createSelector(
  feature,
  (state: TodoState) => state.todos
);