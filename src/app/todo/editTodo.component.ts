import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from './createTask.component';

export interface Todo {
  name: string;
  id: number;
  tasks: Task[];
  description: string;
}

export interface Task {
  name: string;
  id: number;
  todo: number;
}

@Component({
  selector: 'edit-todo',
  templateUrl: './editTodo.component.html',
  // styleUrl: './editTodo.component.scss',
})
export class EditTodoComponent {
  todo: Todo = {
    id: 1,
    name: 'hello todo',
    description: 'todo description',
    tasks: [
      { id: 1, name: 'hello todo', todo: 1 },
      { id: 2, name: 'hello todo 2', todo: 1 },
    ],
  };
  constructor(private dialog: MatDialog) {}

  applyForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  displayedColumns: string[] = ['no', 'name', 'edit', 'delete'];
  dataSource = this.todo.tasks;

  updateTodo() {}
  async openQueryModal() {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '400px',
      height: '300px',
    });

    const result = await dialogRef.afterClosed().toPromise();
    console.log(result);
    return result;
  }
}
