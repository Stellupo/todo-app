import { Injectable } from "@angular/core";
import { filter } from "rxjs";
import { AppState } from "./store";
import { select, Store } from "@ngrx/store";
import { loadTodosSuccess } from "./actions";
import { todoSelector } from "./selectors";

@Injectable()
export class ToDoService {
  private isInit: boolean = false;

  constructor(private store: Store<AppState>) {}

  setSavedState(state: any, localStorageKey: string) {
    localStorage.setItem(localStorageKey, state);
  }

  getSavedState(localStorageKey: any): any {
    return JSON.parse(localStorage.getItem(localStorageKey) as string);
  }

  loadTodoFromLocalStorage() {
    const stateToSave = this.getSavedState("todos");
    if (stateToSave) {
      this.store.dispatch(
        loadTodosSuccess({
          todos: stateToSave,
        })
      );
    }
  }

  initStore() {
    if (this.isInit) {
      return;
    } 
    
    // after load/refresh…
    this.isInit = true;
    this.loadTodoFromLocalStorage();

    this.store
      .pipe(
        select(todoSelector),
        filter((state) => !!state)
      )
      .subscribe((state) => {
        this.setSavedState(JSON.stringify(state), "todos");
      });

    // keep the changes cohersive if different tabs are open
    window.addEventListener("storage", () => this.loadTodoFromLocalStorage());
  }
}
