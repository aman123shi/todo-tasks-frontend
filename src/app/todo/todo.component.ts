import { Component } from '@angular/core';
import { CreateToDoComponent } from './createTodo.component';
import { MatDialog } from '@angular/material/dialog';

export interface Todo {
  name: string;
  id: number;
  tasks: number[];
  description: string;
}

export interface Task {
  name: string;
  id: number;
  todo: number[];
}

const todos: Todo[] = [
  {
    id: 1,
    name: 'Search a house',
    description: 'this is my description',
    tasks: [1, 2, 9, 9],
  },
  {
    id: 2,
    name: 'find a car ',
    description: 'this is my description',
    tasks: [1, 2],
  },
  {
    id: 3,
    name: 'finalsize the house',
    description: 'this is my description',
    tasks: [1, 2],
  },
  {
    id: 4,
    name: 'pay the bills',
    description: 'this is my description',
    tasks: [1, 2],
  },
];

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  constructor(private dialog: MatDialog) {}
  displayedColumns: string[] = [
    'no',
    'name',
    'description',
    'tasks',
    'edit',
    'delete',
  ];
  dataSource = todos;

  async openQueryModal(): Promise<string> {
    const dialogRef = this.dialog.open(CreateToDoComponent, {
      width: '400px',
      height: '500px',
    });

    const result = await dialogRef.afterClosed().toPromise();
    console.log(result);
    return result;
  }
}
