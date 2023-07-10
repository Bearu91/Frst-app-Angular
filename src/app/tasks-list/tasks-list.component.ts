import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from "../task-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask!: Task;


  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t !== task);
    });
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task.id, task).subscribe();
  }


}
