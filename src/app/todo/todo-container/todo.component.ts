import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../store/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store';
import * as TodoActions from '../../store/actions';
import { todoSelector } from '../../store/selectors';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {

  todos$: Observable<Todo[]>;
  isLoading$: Observable<boolean>;
  public decription: string = '';
  public descriptionUpdate: string = '';
  public editingMode: boolean = false;
  
  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(todoSelector);
    this.isLoading$ = this.store.select(state => state.todo.loading);
    this.loadTodos();
  }
  
  loadTodos() {
  this.store.dispatch(TodoActions.loadTodos());
  }
  
  addTodo(index: number) {
  
  const todo: Todo = {id: index, description: this.decription, completed: false };
  this.store.dispatch(TodoActions.addTodo({ todo }));
  this.decription = '';
  }
  
  complete(todo: Todo) {
    this.store.dispatch(TodoActions.updateTodo({todo : {...todo, completed: true}}));
  }

  toggleEditingMode() {
    this.editingMode = true;
  }

  delete(todoId: any) {
    this.store.dispatch(TodoActions.deleteTodo({id: todoId}));
  }

  update(todo: Todo, newDescription: string) {
    // const newTodo: Todo = {id: todo.id, description: newDescription, completed: todo.completed };
    this.store.dispatch(TodoActions.updateTodo({todo : {...todo, description: newDescription}}));
    this.toggleEditingMode();
  }
}