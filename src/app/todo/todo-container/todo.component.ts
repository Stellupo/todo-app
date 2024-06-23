import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../../store/todo.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/store";
import * as TodoActions from "../../store/actions";
import { todoSelector } from "../../store/selectors";
import { ToDoService } from "../../store/todo-service";

@Component({
  selector: "app-todo",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.scss",
})
export class TodoComponent {
  todos$: Observable<Todo[]>;
  public decription: string = "";

  constructor(
    private store: Store<AppState>,
    private todoService: ToDoService
  ) {
    this.loadTodos();
    this.todos$ = this.store.select(todoSelector);
  }

  loadTodos() {
    this.todoService.initStore();
  }

  addTodo(index: number) {
    const todo: Todo = {
      id: index,
      description: this.decription,
      completed: false,
    };
    this.store.dispatch(TodoActions.addTodo({ todo }));
    this.decription = "";
  }
}
