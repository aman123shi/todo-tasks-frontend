export interface TodoDto {
  name: string;
  id: number;
  tasks: TaskDto[];
  description: string;
}

export interface TaskDto {
  name: string;
  id: number;
  todo: number;
}
