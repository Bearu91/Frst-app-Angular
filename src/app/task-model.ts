export interface Task {
  _id: string;
  title: string;
  description: string;
  done: boolean;
}
export interface TaskEditDTO {
  title: string;
  description: string
  done: boolean;
}
