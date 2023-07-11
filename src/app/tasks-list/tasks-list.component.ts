import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from "../task-model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks!: Task[];



  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe((): void => {
      this.tasks = this.tasks.filter(t => t._id !== id);
    });
  }

  // updateTask(task: Task){
  //   this.taskService.updateTask(task).subscribe();
  // }



}
