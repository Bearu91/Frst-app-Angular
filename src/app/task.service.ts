import { Injectable } from '@angular/core';
import { Task } from "./task-model";

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks:Task[] = [
    { id: 1, name: 'Task 1', description: 'Opis zadania 1', done: false },
    { id: 2, name: 'Task 2', description: 'Opis zadania 2', done: false },
  ];

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks.find(task => task.id === id);
  }

  generateId(): number {
    // Logika generowania unikalnego identyfikatora
    const maxId = this.tasks.reduce((prev, curr) => (curr.id > prev ? curr.id : prev), 0);
    return maxId + 1;
  }

  addTask(newTask: any) {
    this.tasks.push(newTask);
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
  setTaskDone(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.done = true;
    }
  }
  // w task.service.ts
  updateTask(id: number, updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index > -1) {
      this.tasks[index] = updatedTask;
    }
  }

}
