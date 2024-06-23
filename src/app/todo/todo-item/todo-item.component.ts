import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../../store/todo.model';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/actions';
import { AppState } from '../../store/store';

@Component({
  selector: 'app-todo-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  public editingMode: boolean = false;
  public decription: string = '';
  public descriptionUpdate: string = '';

  constructor(private store: Store<AppState>) {}

  complete(completed: boolean, todo: Todo) {
    this.store.dispatch(TodoActions.updateTodo({todo : {...todo, completed: completed}}));
  }

  toggleEditingMode(enabled: boolean) {
    this.editingMode = enabled;
    if (!enabled) {this.descriptionUpdate = ''}
  }

  delete(todoId: any) {
    this.store.dispatch(TodoActions.deleteTodo({id: todoId}));
  }

  update(todo: Todo, newDescription: string) {
    this.store.dispatch(TodoActions.updateTodo({todo : {...todo, description: newDescription}}));
    this.toggleEditingMode(false);
  }
}
