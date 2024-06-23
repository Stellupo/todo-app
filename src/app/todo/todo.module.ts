import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoComponent } from "./todo-container/todo.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ToDoService } from "../store/todo-service";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [TodoComponent, TodoItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  exports: [TodoComponent, TodoItemComponent],
  providers: [ToDoService],
})
export class TodoModule {}
